INSERT INTO
    department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');
INSERT INTO
    role (department_id, title, salary)
VALUES
    (1, 'Sales Lead', 100000),
    (1, 'Salesperson', 80000),
    (2, 'Lead Engineer', 150000),
    (2, 'Software Engineer', 120000),
    (3, 'Account Manager', 160000),
    (3, 'Accountant', 125000),
    (4, 'Legal Team Lead', 250000),
    (4, 'Lawyer', 190000);
INSERT INTO
    employee (role_id, first_name, last_name, manager_id)
VALUES
    (1, 'Joe', 'Biden', null),
    (2, 'Kamala', 'Harris', 1),
    (3, 'Donald', 'Trump', null),
    (4, 'James', 'Vance', 3);