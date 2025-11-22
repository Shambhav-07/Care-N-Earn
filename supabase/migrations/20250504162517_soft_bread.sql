/*
  # Add name column to profiles table

  1. Changes
    - Add `name` column to `profiles` table
      - Type: text
      - Not nullable
      - No default value

  2. Security
    - No changes to RLS policies needed
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'name'
  ) THEN
    ALTER TABLE profiles ADD COLUMN name text NOT NULL;
  END IF;
END $$;