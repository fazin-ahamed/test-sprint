exports.shapetypes = function(types) {
  return {
    UUID: { inherits: types.uuid },
    TIMESTAMPTZ: { inherits: types.timestamptz },
  };
};

exports.up = (pgm) => {
  // Create ENUM types
  pgm.createType('schedule_flexibility_type', ['fixed', 'flexible']);
  pgm.createType('workload_tolerance_type', ['conservative', 'balanced', 'aggressive']);
  pgm.createType('sprint_length_type', ['daily', '3_day', 'weekly']);

  // Create onboarding_data table
  pgm.createTable('onboarding_data', {
    id: { type: 'UUID', primaryKey: true, default: pgm.func('gen_random_uuid()') },
    student_id: { type: 'UUID', notNull: true, unique: true, references: 'students(id)', onDelete: 'CASCADE' },
    daily_study_hours_weekday: { type: 'INTEGER' },
    daily_study_hours_weekend: { type: 'INTEGER' },
    preferred_study_windows: { type: 'JSONB', notNull: true, default: pgm.func("'[]'::jsonb") },
    school_coaching_hours: { type: 'JSONB', notNull: true, default: pgm.func("'[]'::jsonb") },
    blackout_periods: { type: 'JSONB', notNull: true, default: pgm.func("'[]'::jsonb") },
    schedule_flexibility: { type: 'schedule_flexibility_type', notNull: true, default: 'flexible' },
    daily_workload_tolerance: { type: 'workload_tolerance_type', notNull: true, default: 'balanced' },
    preferred_sprint_length: { type: 'sprint_length_type', notNull: true, default: '3_day' },
    self_assessed_strong_subjects: { type: 'JSONB', notNull: true, default: pgm.func("'[]'::jsonb") },
    self_assessed_weak_subjects: { type: 'JSONB', notNull: true, default: pgm.func("'[]'::jsonb") },
    exam_confidence_level: { 
      type: 'INTEGER',
      check: 'exam_confidence_level >= 1 AND exam_confidence_level <= 10'
    },
    created_at: { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('CURRENT_TIMESTAMP') },
    updated_at: { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('CURRENT_TIMESTAMP') }
  });

  // Create indexes
  pgm.createIndex('onboarding_data', 'student_id', { unique: true });
};

exports.down = (pgm) => {
  pgm.dropTable('onboarding_data', { ifExists: true });
  pgm.dropType('schedule_flexibility_type', { ifExists: true });
  pgm.dropType('workload_tolerance_type', { ifExists: true });
  pgm.dropType('sprint_length_type', { ifExists: true });
};