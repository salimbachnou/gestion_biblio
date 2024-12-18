function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Formulaire de Contact</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Nom</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Votre message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Informations</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Adresse</h3>
              <p className="text-gray-600">123 Rue de la Bibliothèque</p>
              <p className="text-gray-600">75000 Paris</p>
            </div>
            <div>
              <h3 className="font-medium">Téléphone</h3>
              <p className="text-gray-600">+33 1 23 45 67 89</p>
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-600">contact@bibliotech.fr</p>
            </div>
            <div>
              <h3 className="font-medium">Horaires</h3>
              <p className="text-gray-600">Lundi - Vendredi: 9h - 19h</p>
              <p className="text-gray-600">Samedi: 10h - 18h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 