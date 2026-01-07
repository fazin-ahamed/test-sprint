exports.shapetypes = function(types) {
  return {
    UUID: { inherits: types.uuid },
    TIMESTAMPTZ: { inherits: types.timestamptz },
  };
};

exports.up = (pgm) => {
  // Create ENUM type for user roles
  pgm.createType('user_role', ['student', 'admin', 'teacher']);

  // Create users table
  pgm.createTable('users', {
    id: { type: 'UUID', primaryKey: true, default: pgm.func('gen_random_uuid()') },
    email: { type: 'VARCHAR(255)', notNull: true, unique: true },
    google_id: { type: 'VARCHAR(255)', unique: true },
    role: { type: 'user_role', notNull: true, default: 'student' },
    created_at: { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('CURRENT_TIMESTAMP') },
    updated_at: { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('CURRENT_TIMESTAMP') }
  });

  // Create students table
  pgm.createTable('students', {
    id: { type: 'UUID', primaryKey: true, default: pgm.func('gen_random_uuid()') },
    user_id: { type: 'UUID', notNull: true, unique: true, references: 'users(id)', onDelete: 'CASCADE' },
    target_exams: { type: 'JSONB', notNull: true, default: pgm.func("'[]'::jsonb") },
    subjects_opted: { type: 'JSONB', notNull: true, default: pgm.func("'{}'::jsonb") },
    onboarding_completed: { type: 'BOOLEAN', notNull: true, default: false },
    diagnostic_completed: { type: 'BOOLEAN', notNull: true, default: false },
    is_initialized: { type: 'BOOLEAN', notNull: true, default: false },
    created_at: { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('CURRENT_TIMESTAMP') },
    updated_at: { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('CURRENT_TIMESTAMP') }
  });

  // Create indexes
  pgm.createIndex('users', 'google_id', { unique: true });
  pgm.createIndex('users', 'email', { unique: true });
  pgm.createIndex('students', 'user_id', { unique: true });
};

exports.down = (pgm) => {
  pgm.dropTable('students', { ifExists: true });
  pgm.dropTable('users', { ifExists: true });
  pgm.dropType('user_role', { ifExists: true });
};
