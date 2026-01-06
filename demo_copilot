// findHighestStudent.js
// Utility: find student(s) with the highest score and display full info

/**
 * Return the student(s) with the highest score.
 * - If students is empty, returns an empty array.
 * - If a single top student, returns an array with that student.
 * - If multiple students tie for top score, returns all of them.
 *
 * @param {Array<Object>} students - Array of student objects (must have numeric `score` property)
 * @returns {Array<Object>} - Array containing the top student(s)
 */
function getTopStudents(students) {
  if (!Array.isArray(students) || students.length === 0) return [];

  let maxScore = -Infinity;
  for (const s of students) {
    if (typeof s.score === 'number' && s.score > maxScore) {
      maxScore = s.score;
    }
  }

  // Collect all students with score === maxScore
  return students.filter(s => typeof s.score === 'number' && s.score === maxScore);
}

/**
 * Pretty-print full information about the top student(s).
 *
 * @param {Array<Object>} students
 */
function printTopStudentsInfo(students) {
  const top = getTopStudents(students);
  if (top.length === 0) {
    console.log('No students or no valid scores provided.');
    return;
  }

  if (top.length === 1) {
    console.log('Top student:');
    console.log(JSON.stringify(top[0], null, 2)); // display full object nicely
  } else {
    console.log(`There are ${top.length} top students (tie):`);
    top.forEach((student, idx) => {
      console.log(`\nTop student #${idx + 1}:`);
      console.log(JSON.stringify(student, null, 2));
    });
  }
}

// If you prefer a single object (first encountered top student) instead of array:
function getFirstTopStudent(students) {
  const top = getTopStudents(students);
  return top.length > 0 ? top[0] : null;
}

// Export for usage in Node or bundlers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getTopStudents,
    getFirstTopStudent,
    printTopStudentsInfo,
  };
}

// Example usage (uncomment to run directly):
/*
const students = [
  { id: 1, name: 'Alice', age: 20, score: 88, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 21, score: 95, email: 'bob@example.com' },
  { id: 3, name: 'Carol', age: 19, score: 95, email: 'carol@example.com' },
  { id: 4, name: 'Dave', age: 22, score: 72, email: 'dave@example.com' },
];

printTopStudentsInfo(students);

const best = getFirstTopStudent(students);
console.log('\nFirst top student object (if you only want a single one):', best);
*/
