const printNameAndEmail = ({ name, email }) => {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
};

// Example usage:
printNameAndEmail({ name: "Akash Kumar Singh", email: "akash@example.com" });

const printData = (obj) => {
    const { name, email } = obj; // Destructure name and email from the object
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
};

// Example usage:
const person = { name: "Akash Kumar Singh", email: "akash@example.com" };
printData(person);

