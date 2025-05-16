import {useState} from "react";


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
        <div className="min-h-screen flex items-center justify-center bg-black text-purple-200 p-4">
            <form
                className="bg-[#1e1e1e] p-10 rounded-xl shadow-lg w-full max-w-2xl space-y-6"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-semibold text-center text-purple-300">Contact Me</h2>

                <div>
                    <label className="block mb-1 text-sm font-medium">Name</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full p-3 border border-purple-700 rounded bg-black text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full p-3 border border-purple-700 rounded bg-black text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Message</label>
                    <textarea
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full p-3 border border-purple-700 rounded bg-black text-purple-100 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-purple-700 hover:bg-purple-800 transition-colors px-6 py-3 rounded-lg text-white font-medium"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;