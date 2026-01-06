/** Version Control Systems */
const student_List = [
    { name: "Alice", vcs: "Git" },
    { name: "Bob", vcs: "SVN" },
    { name: "Charlie", vcs: "Mercurial" },
    { name: "David", vcs: "Git" },
    { name: "Eve", vcs: "CVS" }
];

student_List.forEach(student => {
    console.log(`${student.name} uses ${student.vcs}`);
});

var vcsCount = student_List.reduce((acc, student) => {
    acc[student.vcs] = (acc[student.vcs] || 0) + 1;
    return acc;
}, {});

console.log("VCS Usage Count:", vcsCount);



