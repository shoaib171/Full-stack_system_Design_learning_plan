// 🧩 Shallow Copy
// ➡️ Copies only the first level of an object or array.
// ➡️ If the object has nested objects, they still share the same reference (not a full copy).
// ✅ Simple Answer:
// Shallow Copy → ❌ Yes, it can affect the original (because nested objects or arrays share the same reference).
// Deep Copy → ✅ No, it does not affect the original (everything is fully copied and independent)

const user = {
  name: "Shoaib",
  skills: ["JS", "Python"]
};
// Shallow Copy
const shallow = { ...user };
shallow.skills[0] = "C++";
console.log(user.skills); // ['C++', 'Python'] ❌ (affected)
// Deep Copy
const deep = JSON.parse(JSON.stringify(user));
deep.skills[0] = "Java";
console.log(user.skills); // ['C++', 'Python'] ✅ (not affected)

// 👉 In short:
// Shallow copy = affects original (nested values linked)
// Deep copy = does not affect original (fully separate)