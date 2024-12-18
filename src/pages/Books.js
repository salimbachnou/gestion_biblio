import { useState } from 'react';

function Books() {
  const [filter, setFilter] = useState('all'); // 'all', 'available', 'borrowed'

  // Exemple de données de livres (à remplacer par vos vraies données)
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
    // Ajoutez plus de livres ici
  ];

  const filteredBooks = books.filter(book => {
    if (filter === 'all') return true;
    if (filter === 'available') return book.status === 'available';
    if (filter === 'borrowed') return book.status === 'borrowed';
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Nos Livres</h1>
        
        {/* Filtre de disponibilité */}
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="block w-48 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">Tous les livres</option>
            <option value="available">Disponibles</option>
            <option value="borrowed">Empruntés</option>
          </select>
        </div>
      </div>

      {/* Grille de livres */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{book.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{book.author}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{book.category}</span>
                <span 
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    book.status === 'available' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {book.status === 'available' ? 'Disponible' : 'Emprunté'}
                </span>
              </div>
              <button 
                className={`mt-4 w-full py-2 rounded-md text-white font-medium transition-colors ${
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

      {/* Message si aucun livre ne correspond au filtre */}
      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            Aucun livre ne correspond à votre sélection.
          </p>
        </div>
      )}
    </div>
  );
}

export default Books; 