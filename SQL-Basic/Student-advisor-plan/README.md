# Student-advisor plan
A university has started a student-advisor plan which assigns a professor as an advisor to each student for academic guidance. Write a query to find the roll number and names of students who either have a male advisor with  a salary of more than 15000 or a female advisor with a salary of more than 20000.

## Schema:

**student_information**

| Name | Type | Description |
| :-: | :-: | :- |
| roll_number | INTEGER | The roll number of the student. This is the primary key. |
| name | STRING | The name of the student. |
| advisor | INTEGER | The employee ID of the advisor of the student. |

**faculty_information**

| Name | Type | Description |
| :-: | :-: | :- |
| employee_ID | INTEGER | The employee ID of the professor. This is the primary key. |
| gender | CHAR | The gender of the professor (M for male and F for female) |
| salary | INTEGER | The salary of the professor. |

**Note:** Information about any professor who acts as and advisor to a student is always present in _faculty\_information_.

## Sample Data Tables:

**student_information**

| roll_number | name | advisor |
| :-: | :- | :-: |
| 1 | Robert | 2 |
| 2 | Claire | 1 |
| 3 | Kimmy | 2 |

**faculty_information**

| employee_ID | gender | salary |
| :-: | :-: | -: |
| 1 | M | 21000 |
| 2 | F | 18000 |

### Samle Output
```
2 Claire
```