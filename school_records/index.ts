type Grade = {
  p1: number;
  p2: number;
  p3: number;
};

type Test = {
  discipline: string;
  grades: Grade;
  average?: number;
};

type Student = {
  name: string;
  age: number;
  tests: Test[];
};

const student: Student = {
  name: "Prudêncio",
  age: 12,
  tests: [
    {
      discipline: "Math",
      grades: {
        p1: 10,
        p2: 3.7,
        p3: 8.5,
      },
    },
    {
      discipline: "English",
      grades: {
        p1: 10,
        p2: 3.7,
        p3: 8.5,
      },
    },
    {
      discipline: "Geography",
      grades: {
        p1: 10,
        p2: 3.7,
        p3: 8.5,
      },
    },
    {
      discipline: "History",
      grades: {
        p1: 10,
        p2: 3.7,
        p3: 8.5,
      },
    },
  ],
};

function printDivider() {
  console.log("==========================================");
}

function printTest(t: Test) {
  printDivider();
  console.log(`Discipline: ${t.discipline}`);
  console.log(`P1: ${t.grades.p1} | P2: ${t.grades.p2} | P3: ${t.grades.p3}`);
  console.log(`Final: ${t.average}`);
}

function printStudent(s: Student) {
  console.log(`Student: ${s.name}`);
  console.log(`Age: ${s.age}`);

  s.tests.forEach(printTest);
}

function populateAverage(test: Test): Test {
  const avg =
    (test.grades.p1 * 3 + test.grades.p2 * 3 + test.grades.p3 * 4) / 10;

  return { ...test, average: avg };
}

student.tests = student.tests.map(populateAverage);

printStudent(student);
