puts "🌱 Creando proyectos..."

Project.destroy_all

Project.create!([
  {
  title: "MindMe",
  description: "Plataforma de salud mental con agendado, chat y dashboards",
  tags: ["Ruby on Rails", "Stimulus", "Bootstrap"],
  image_url: "https://res.cloudinary.com/tuusuario/image/upload/v1/mindme.png",
  demo_url: "https://mindme.lat",
  code_url: "https://github.com/3v3AH/mindme"
  },

{
    title: "Clon de Airbnb",
    description: "Aplicación para reservar hospedajes, con autenticación, geolocalización y calendario.",
    tags: "Rails,JavaScript,Bootstrap,Mapbox",
    image_url: "https://res.cloudinary.com/demo/image/upload/v1620000000/airbnb_clone.png",
    demo_url: "https://airbnb-clone-demo.netlify.app",
    code_url: "https://github.com/usuario/airbnb-clone"
  }
])
puts "✅ ¡Se cargaron #{Project.count} proyectos exitosamente!"
