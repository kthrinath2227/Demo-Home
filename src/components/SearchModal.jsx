import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([
    'wooden doors',
    'marble art',
    'pooja room designs',
    'steel railings'
  ]);

  const trendingSearches = [
    'luxury door handles',
    'pietra dura inlay',
    'traditional pooja mandir',
    'glass railings',
    'custom door designs',
    'minimalist hardware'
  ];

  const allContent = [
    { type: 'product', title: 'Premium Wooden Door', category: 'Door Designs', section: 'door-designs' },
    { type: 'product', title: 'Modern Glass Door', category: 'Door Designs', section: 'door-designs' },
    { type: 'product', title: 'Abstract Harmony Wall Art', category: 'Wall Arts', section: 'wall-arts' },
    { type: 'product', title: 'Pietra Dura Inlay Table Top', category: 'Marble Art', section: 'marble-art' },
    { type: 'product', title: '3D Wooden World Map', category: 'Wooden Art', section: 'wooden-art' },
    { type: 'product', title: 'Traditional Teak Mandir', category: 'Pooja Room', section: 'pooja-room' },
    { type: 'product', title: 'Steel Staircase Railing', category: 'Railings', section: 'railings' },
    { type: 'product', title: 'Premium Brass Handle', category: 'Door Handles', section: 'door-handles' },
    { type: 'section', title: 'Our Process', category: 'Company', section: 'our-process' },
    { type: 'section', title: 'Our Projects', category: 'Portfolio', section: 'projects' },
    { type: 'section', title: 'Blog & Tips', category: 'Resources', section: 'blog' },
    { type: 'section', title: 'Contact Us', category: 'Support', section: 'contact' }
  ];

  // 🔍 Search filter logic
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // 🧠 Handle search submit
  const handleSearch = (query) => {
    if (query.trim()) {
      setRecentSearches(prev => {
        const updated = [query, ...prev.filter(item => item !== query)].slice(0, 5);
        return updated;
      });

      if (searchResults.length === 0) {
        toast({
          title: "No results found",
          description: `No results found for "${query}". Try different keywords.`,
        });
      }
    }
  };

  // 🧭 Scroll to section
  const handleResultClick = (result) => {
    const element = document.getElementById(result.section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onClose();
    } else {
      toast({
        title: "Navigation",
        description: `🚧 This section isn't available yet.`,
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch(searchQuery);
    if (e.key === 'Escape') onClose();
  };

  // 🚫 Strict scroll lock for mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      `;
    } else {
      document.body.style.cssText = '';
    }
    return () => {
      document.body.style.cssText = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center overflow-hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 h-[90vh] max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 🔹 Header */}
            <div className="p-6 border-b border-stone-200">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search for doors, marble art, designs..."
                    className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent text-lg"
                    autoFocus
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-stone-500 hover:text-stone-700"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* 🔹 Content */}
            <div className="flex-1 overflow-y-auto">
              {searchQuery.trim() ? (
                <div className="p-6">
                  {searchResults.length > 0 ? (
                    <>
                      <h3 className="text-lg font-semibold mb-4 text-stone-800">
                        Search Results ({searchResults.length})
                      </h3>
                      <div className="space-y-3">
                        {searchResults.map((result, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-stone-50 cursor-pointer transition-colors"
                            onClick={() => handleResultClick(result)}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                result.type === 'product'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-blue-100 text-blue-600'
                              }`}>
                                <Search className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-medium text-stone-800">{result.title}</p>
                                <p className="text-sm text-stone-500">{result.category}</p>
                              </div>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              result.type === 'product'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-blue-100 text-blue-600'
                            }`}>
                              {result.type}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <Search className="h-12 w-12 text-stone-300 mx-auto mb-4" />
                      <p className="text-stone-500 text-lg">No results found</p>
                      <p className="text-stone-400 text-sm">
                        Try different keywords or browse our categories
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-6 space-y-6">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Clock className="h-5 w-5 text-stone-400" />
                        <h3 className="text-lg font-semibold text-stone-800">
                          Recent Searches
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((search, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => setSearchQuery(search)}
                            className="text-sm"
                          >
                            {search}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trending Searches */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-stone-400" />
                      <h3 className="text-lg font-semibold text-stone-800">
                        Trending Searches
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trendingSearches.map((search, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="sm"
                          onClick={() => setSearchQuery(search)}
                          className="text-sm bg-green-50 text-green-700 hover:bg-green-100"
                        >
                          {search}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
