import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-scroll";
import { db } from "../firebaseconfig";
import Card from "./Card";

export default function Main() {
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [description, setDescription] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [sizeOfDb, setSizeOfDb] = useState();
  const results = [
    { name: "", photo: "results1" },
    { name: "", photo: "results2" },
    { name: "", photo: "results3" },
  ];
  const ourServicesInfo = [
    {
      title: "Privacidad Y Seguridad​",
      description:
        "Para nosotros es muy importante que estés a gusto por lo que podrás subir el contenido que tu elijas. Además, podremos bloquear el contenido a seguidores de tu país para mantener tu intimidad intacta.",
      icon: "usuario",
    },
    {
      title: "Gestión De Cuenta",
      description:
        "Si ya tienes una cuenta de OnlyFans y otros redes, nos encargaremos de toda la gestión y de aumentar tu cartera de clientes. Si no tienes, nosotros nos encargaremos del proceso. ¡Solo tendrás que posar!",
      icon: "histograma",
    },
    {
      title: "Community Management",
      description:
        "Gestionamos tu cuenta para que ahorres tiempo y energía. Entendemos que a veces no apetece responder a los mensajes de tus fans. Lo haremos por ti para tenerlos 100% satisfechos.",
      icon: "comunidad",
    },
    {
      title: "Estratégia marketing",
      description:
        "Te elaboramos una estrategia completa y personalizada para llevar tu actividad de la mejor forma que sea. Gracias a nuestra experiencia, podemos comprometernos a que empieces a tener resultados en menos de 1 mes.",
      icon: "marketing",
    },
  ];

  const faq = [
    {
      title: "¿TENGO QUE PAGAR PARA SER MODELO ONLYGROWTH?",
      description:
        "No es necesario hacer ningún pago para registrarse, ya que la inscripción es completamente gratuita. No obstante, se cobra una comisión mensual por nuestros servicios.",
      icon: "pregunta",
    },
    {
      title: "¿QUÉ TENDRÉ QUE HACER COMO MODELO?",
      description:
        "Solo tienes que mandarnos tu contenido de la semana. Es lo único que te vamos a pedir. Del resto, nos encargamos nosotros.",
      icon: "pregunta",
    },
    {
      title: "¿CUANTO PUEDO GANAR AL MES?",
      description:
        "En términos generales, nuestras modelos ganan alrededor de 2600€ cada mes. Si estás empezando desde cero, podrías ganar entre 500€ y 1200€ durante los primeros tres meses, dependiendo del tipo de contenido que decidas publicar, tu disponibilidad y cuánto te comprometas.",
      icon: "pregunta",
    },
    {
      title: "¿COMO ME PODEIS ASEGURAR RESULTADOS?",
      description:
        "Durante más de dos años, hemos adquirido experiencia en el campo del marketing digital y la gestión de OnlyFans. Hemos probado diversas estrategias y sabemos cuáles son las que funcionan y brindan resultados exitosos. A pesar de esto, nunca prometemos resultados a nuestros modelos, solo hacemos previsiones basadas en nuestra experiencia y conocimientos.",
      icon: "pregunta",
    },
    {
      title: "¿OS ENCARGAÍS DE LAS REDES SOCIALES?",
      description:
        "Obviamente. Nos encargamos de todo, incluido la gestión de tus redes sociales. Si no tienes perfiles sociales, nos encargaremos de creártelos.",
      icon: "pregunta",
    },
    {
      title: "¿TENGO QUE TRABAJAR CON MI NOMBRE?",
      description:
        "No, de hecho te recomendamos que te busques un alias facil de escribir y recordar, y que hagamos de ese alias tu marca personal. Eso ayudará siempre a mantener tu privacidad, asi como otras indicaciones y recomendaciones que te diremos si finalmente trabajamos juntos y te preocupan estos temas.",
      icon: "pregunta",
    },
  ];

  const sizeOfDbisMoreThan100 = () => {
    db()
      .collection("Form")
      .get()
      .then((q) => {
        setSizeOfDb(q.size());
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setMessageSent(false);
      setErrorMessage(false);
    }, 2000);
  }, [messageSent, errorMessage]);

  return (
    <section class="text-gray-600 body-font">
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Te ayudamos a que puedas vivir de Onlyfans
        </h1>
        <div class="purple_gradient"></div>
        <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          Empieza a generar dinero sin preocuparte de nada
          <br />
          te lo gestionamos todo nosotros
        </h2>
        <div className="ml-6 text-center">
          <a className="inline-flex cursor-pointer items-center py-3 rounded-xl font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline">
            <div className="flex text-lg">
              <Link to="C" smooth={true} duration={1000}>
                <span className="justify-center">Contáctanos</span>
              </Link>
            </div>
          </a>
          <a className="inline-flex cursor-pointer items-center py-3 rounded-xl font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline">
            <div className="flex text-lg">
              <Link to="B" smooth={true} duration={1000}>
                <span className="justify-center">FAQ</span>
              </Link>
            </div>
          </a>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          className="object-cover object-center rounded-xl w-3/4 mb-10 border shadow-md g327"
          alt="Placeholder Image"
          src="./images/Onlygrowth.png"
        ></img>
      </div>
      <h2
        id="A"
        className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl"
      >
        Nuestros Servicios
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        Privacidad, Gestión, Crecimiento, Ingresos
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        {ourServicesInfo.map((service) => (
          <Card
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
      <section class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-white">Resultados</h1>
            <h1 class="mb-9 text-2xl font-semibold text-gray-200">
              Ten estos resultados con nosotros.
            </h1>
            <div className="items-center flex md:flex-row flex-col">
              {results.map((e) => (
                <img
                  src={`./images/${e.photo}.jpg`}
                  className="h-1/4 w-72 md:m-10 mb-8 rounded-xl shadow"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <h2
        id="B"
        className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl"
      >
        Preguntas frecuentes
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        ¿Cómo trabajamos?
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        {faq.map((service) => (
          <Card
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      <section id="C" class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-white">
              Contáctanos si estás interesada en trabajar con nosotros :)
            </h1>
            <h1 class="mb-9 text-2xl font-semibold text-gray-200">
              Introduce los siguientes datos para ponernos en contacto
            </h1>
            <div className="items-center flex flex-col">
              <input
                placeholder="jack@example.com"
                onChange={(text) => setEmail(text.target.value)}
                class="border border-gray-600 text-white w-3/4 pr-2 pl-2 py-3 mt-2 rounded-md md:w-2/4  font-semibold hover:border-gray-700 bg-black"
              />
              <input
                placeholder="Instagram"
                onChange={(text) => setInstagram(text.target.value)}
                class="border border-gray-600 text-white w-3/4 pr-2 pl-2 py-3 mt-2 rounded-md md:w-2/4 font-semibold hover:border-gray-700 bg-black"
              />
              <input
                placeholder="Write your comment"
                onChange={(text) => {
                  setDescription(text.target.value);
                }}
                class="border text-left align-top border-gray-600 text-white h-44 w-3/4 mb-10 md:w-2/4 pr-2 pl-2 py-3 mt-2 rounded-md  font-semibold hover:border-gray-700 bg-black"
              />
            </div>

            <a
              class="inline-flex cursor-pointer items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              onClick={() => {
                if (email === "" || instagram === "") {
                  setMessageSent(true);
                  return;
                }

                sizeOfDbisMoreThan100();

                if (sizeOfDb > 100) return;

                db()
                  .collection("Form")
                  .add({
                    email: email,
                    instagram: instagram,
                    description: description,
                  })
                  .then(() => setMessageSent(true))
                  .catch((e) => setErrorMessage(true));
              }}
            >
              <span class="justify-center">Enviar</span>
            </a>
            {messageSent ? (
              <p className="font-bold mt-6 text-white">Contácto enviado</p>
            ) : errorMessage ? (
              <>
                <p className="font-bold mt-6 text-red-400">
                  Rellena obligatoriamente tu instagram y tu correo
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
