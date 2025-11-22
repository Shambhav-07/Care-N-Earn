/*
  # Add name field to profiles table

  1. Changes
    - Add `name` column to profiles table
    - Add `phone` column to profiles table
    - Update existing policies

  2. Security
    - Maintain existing RLS policies
*/

-- Add new columns if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'name'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN name text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'phone'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN phone text;
  END IF;
END $$;