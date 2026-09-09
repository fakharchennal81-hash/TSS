/*
# Create admission_applications table

1. Purpose
   Stores online admission applications submitted by prospective students
   through the public website form. This is a no-auth (single-tenant) public
   form — anyone visiting the site can submit an application.

2. New Tables
   - `admission_applications`
     - `id` (uuid, primary key, auto-generated)
     - `student_full_name` (text, not null) — full legal name of the student
     - `guardian_name` (text, not null) — father or guardian's name
     - `contact_number` (text, not null) — phone / WhatsApp number
     - `grade_applying` (text, not null) — class/grade the student is applying for
     - `previous_school` (text, nullable) — last school attended
     - `previous_marks` (text, nullable) — marks/percentage from previous school
     - `address` (text, nullable) — home address
     - `status` (text, default 'pending') — application review status
     - `created_at` (timestamptz, default now()) — submission timestamp

3. Security
   - RLS enabled on `admission_applications`.
   - Public INSERT allowed (anyone can submit an application) — `TO anon, authenticated`.
   - No SELECT / UPDATE / DELETE for anon or authenticated — application data
     is private to school administrators (managed via Supabase dashboard).
*/

CREATE TABLE IF NOT EXISTS admission_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_full_name text NOT NULL,
  guardian_name text NOT NULL,
  contact_number text NOT NULL,
  grade_applying text NOT NULL,
  previous_school text,
  previous_marks text,
  address text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admission_applications ENABLE ROW LEVEL SECURITY;

-- Allow public insert (form submission from website)
DROP POLICY IF EXISTS "anon_insert_admission_applications" ON admission_applications;
CREATE POLICY "anon_insert_admission_applications"
  ON admission_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
