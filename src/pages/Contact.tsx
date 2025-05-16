import React, {useState} from "react";

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const validate = () => {
        const newErrors = { name: '', email: '', message: '' };
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email required';
        if (form.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
        setErrors(newErrors);
        return !newErrors.name && !newErrors.email && !newErrors.message;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Message sent successfully!');
            setForm({ name: '', email: '', message: '' });
        }
    };

    return (
        <form className="p-4 text-purple-200 space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block">Name</label>
                <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full p-2 border rounded bg-black text-purple-100"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
                <label className="block">Email</label>
                <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full p-2 border rounded bg-black text-purple-100"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
                <label className="block">Message</label>
                <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full p-2 border rounded bg-black text-purple-100"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded">Send</button>
        </form>
    );
}
export default Contact