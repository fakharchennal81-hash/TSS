export interface AdmissionApplication {
  id: string;
  student_full_name: string;
  guardian_name: string;
  contact_number: string;
  grade_applying: string;
  previous_school: string | null;
  previous_marks: string | null;
  address: string | null;
  status: string;
  created_at: string;
}

export interface AdmissionFormData {
  student_full_name: string;
  guardian_name: string;
  contact_number: string;
  grade_applying: string;
  previous_school: string;
  previous_marks: string;
  address: string;
}
