
import { X, CheckCircle } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const packages = [
  {
    name: '1 Month',
    price: '149 SEK',
    features: ['Full access to all theory', '1000+ practice questions', 'Realistic final tests'],
    popular: false,
  },
  {
    name: '3 Months',
    price: '299 SEK',
    features: ['All features from 1 Month', 'Save on monthly cost', 'Ideal for most learners'],
    popular: true,
  },
  {
    name: '6 Months',
    price: '499 SEK',
    features: ['All features from 3 Months', 'Best value for long-term study', 'No pressure, learn at your pace'],
    popular: false,
  },
];

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-4xl w-full relative transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white">
          <X size={24} />
        </button>
        
        <h2 className="text-3xl font-bold text-center mb-2">Choose Your Plan</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Register by selecting a package to get started.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`border-2 rounded-lg p-6 flex flex-col ${pkg.popular ? 'border-blue-500' : 'border-gray-200 dark:border-gray-700'}`}>
              {pkg.popular && <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full self-center mb-4 -mt-10">Most Popular</span>}
              <h3 className="text-2xl font-semibold text-center">{pkg.name}</h3>
              <p className="text-4xl font-bold text-center my-4">{pkg.price}</p>
              <ul className="space-y-3 mb-6 text-sm">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-auto w-full py-2 rounded-lg font-semibold transition ${pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
                Select Plan & Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}