SELECT roll_number, name
FROM student_information
LEFT JOIN faculty_information
ON student_information.advisor = faculty_information.employee_ID
WHERE (gender = 'M' AND salary > 15000)
   OR (gender = 'F' AND salary > 20000);
