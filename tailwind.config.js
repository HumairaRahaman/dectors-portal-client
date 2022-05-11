module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'background-img': "url('/src/assets/images/banner-bg.png')",
        'background-Appointment': "url('/src/assets/images/appointment.png')",
        'background-Footer': "url('/src/assets/images/footer.png')",
        
      }
    },
  },daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0fcfec",
          secondary: "#19d3ae",
          accent: "#3a4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
    ],
  },

  plugins: [require("daisyui")],
}
