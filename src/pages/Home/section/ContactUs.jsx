import { useState } from "react";

const ContactUs = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(initialState);
  const [result, setResult] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;

    setIsError(false);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setIsError(true);
      return;
    }

    setResult(form);
    setIsSubmitted(true);
    setForm(initialState);
    setIsError(false);
  };

  const handleResubmit = () => {
    setIsSubmitted(false);
    setResult({});
  };

  return (
    <section id="contactus-section" className="container md:my-20 my-10 px-4">
      <div className="flex justify-between md:flex-row flex-col gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Jika ada pertanyaan, kritik, atau saran, silahkan hubungi saya
            dengan mengisi form ini.
          </p>
        </div>
        <form className="w-full max-w-xl space-y-3" onSubmit={handleSubmitForm}>
          <div className="flex gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  First Name
                  <span className="text-red-600">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                name="firstName"
                value={form.firstName}
                onChange={handleChangeForm}
                disabled={isSubmitted}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  Last Name
                  <span className="text-red-600">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                name="lastName"
                value={form.lastName}
                onChange={handleChangeForm}
                disabled={isSubmitted}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">
                Email
                <span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              name="email"
              value={form.email}
              onChange={handleChangeForm}
              disabled={isSubmitted}
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">
                What can we help you with?
                <span className="text-red-600">*</span>
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type here"
              name="message"
              value={form.message}
              onChange={handleChangeForm}
              disabled={isSubmitted}
            ></textarea>
          </label>

          <div className="flex gap-3">
            <button
              type="submit"
              className="btn btn-neutral text-white bg-blue-900"
              disabled={isSubmitted}
            >
              Submit
            </button>
            {isError && (
              <p className="text-red-600 text-sm mt-2">
                *Masih ada field yang belum diisi
              </p>
            )}
          </div>
        </form>
      </div>
      {isSubmitted && (
        <div className="mt-12 flex flex-col items-center justify-center">
          <p className="text-center">
            Pesanmu Berhasil dikirim{" "}
            <span className="font-semibold">
              &quot;{result.firstName} {result.lastName} - {result.email},{" "}
              {result.message}&quot;
            </span>{" "}
            Terimakasih telah menghubungi.
          </p>
          <button
            onClick={handleResubmit}
            className="text-indigo-600  font-semibold leading-7"
          >
            Kirim Ulang
          </button>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
