import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({}); // Xato holatini saqlash
  const [formStatus, setFormStatus] = useState(''); // Xabar holatini saqlash

  // Email jo'natish funksiyasi
  const sendEmail = (e) => {
    e.preventDefault();

    // Ma'lumotlar haqiqiyligini tekshirish
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormStatus('Iltimos, to\'g\'ri ma\'lumot kiriting!');
      return;
    }

    emailjs
    .sendForm('service_98zbnkn', 'template_45x1f2l', form.current, 'eW4Jh7S8w-fQtPnRO')
      .then(
        () => {
          setFormStatus('Email muvaffaqiyatli jo\'natildi!');
          setErrors({}); // Xatolarni tozalash
        },
        (error) => {
          setFormStatus('Email jo\'natishda xatolik yuz berdi!');
          console.log('FAILED...', error.text);
        }
      );
  };

  // Formani tekshirish funksiyasi
  const validateForm = () => {
    const errors = {};
    const formData = form.current;

    if (!formData.user_name.value.trim()) {
      errors.user_name = 'Ismni kiriting';
    }
    if (!/\S+@\S+\.\S+/.test(formData.user_email.value)) {
      errors.user_email = 'To\'g\'ri emailni kiriting';
    }
    if (!formData.message.value.trim()) {
      errors.message = 'Xabarni kiriting';
    }

    return errors;
  };

  // Input elementining border rangini o'zgartirish
  const getInputStyle = (field) => {
    if (errors[field]) {
      return { borderColor: 'red' }; // Noto'g'ri bo'lsa qizil
    } else if (errors[field] === undefined) {
      return { borderColor: 'green' }; // To'g'ri bo'lsa yashil
    }
    return {};
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Email Jo'natish</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            style={getInputStyle('user_name')}
            required
          />
          {errors.user_name && <p style={{ color: 'red' }}>{errors.user_name}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            style={getInputStyle('user_email')}
            required
          />
          {errors.user_email && <p style={{ color: 'red' }}>{errors.user_email}</p>}
        </div>

        <div>
          <label>Message</label>
          <textarea
            name="message"
            style={getInputStyle('message')}
            required
          />
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </div>

        <div>
          <button type="submit">Send Email</button>
        </div>
      </form>

      {/* Form holatini ko'rsatish uchun */}
      {formStatus && (
        <div style={{
          marginTop: '10px',
          padding: '10px',
          borderRadius: '5px',
          color: '#fff',
          backgroundColor: formStatus.includes('muvaffaqiyatli') ? '#4BB543' : '#FF6347'
        }}>
          {formStatus}
        </div>
      )}
    </div>
  );
};

export default EmailForm;


  //GmailComponent
//.sendForm('service_98zbnkn', 'template_45x1f2l', form.current, 'eW4Jh7S8w-fQtPnRO')