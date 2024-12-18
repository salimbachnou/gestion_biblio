import { useState } from 'react';

function Categories() {
  // Exemple de données (à remplacer par vos vraies données)
  const books = [
    {
      id: 1,
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      status: "available",
      category: "Fiction"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
      status: "borrowed",
      category: "Science Fiction"
    },
    {
      id: 3,
      title: "L'Histoire de l'Art",
      author: "E.H. Gombrich",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      status: "available",
      category: "Art"
    },
    {
      id: 4,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
      status: "available",
      category: "Histoire"
    }
  ];

  // Grouper les livres par catégorie
  const booksByCategory = books.reduce((acc, book) => {
    if (!acc[book.category]) {
      acc[book.category] = [];
    }
    acc[book.category].push(book);
    return acc;
  }, {});

  // État pour la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Liste de toutes les catégories
  const categories = Object.keys(booksByCategory);

  // Filtrer les livres selon la catégorie sélectionnée
  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Catégories</h1>
        
        {/* Filtre de catégories */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-48 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">Toutes les catégories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Liste des catégories */}
      <div className="space-y-8">
        {filteredCategories.map(category => (
          <div key={category} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{category}</h2>
            
            {/* Grille de livres pour cette catégorie */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {booksByCategory[category].map(book => (
                <div key={book.id} className="flex bg-white rounded-lg overflow-hidden border">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-1/3 object-cover"
                  />
                  <div className="p-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                    <span 
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        book.status === 'available' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {book.status === 'available' ? 'Disponible' : 'Emprunté'}
                    </span>
                    <button 
                      className={`mt-2 w-full py-1 rounded-md text-white text-sm font-medium transition-colors ${
                        book.status === 'available'
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                      disabled={book.status !== 'available'}
                    >
                      {book.status === 'available' ? 'Emprunter' : 'Indisponible'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Message si aucune catégorie ne correspond au filtre */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            Aucune catégorie ne correspond à votre sélection.
          </p>
        </div>
      )}
    </div>
  );
}

export default Categories; 