export default {
    // Jest'in test dosyalarını araması için kök dizini
    roots: ['<rootDir>/src'],
    // Jest için test dosyası eşleştirme kalıpları
    testMatch: [
      '**/__tests__/**/*.js?(x)',
      '**/?(*.)+(spec|test).js?(x)',
      '**/MyMap.test.js',
    ],
    // Jest için modül adları eşleştirme
    moduleNameMapper: {
      // Örneğin, CSS dosyalarını mocklamak için kullanılabilir
      '\\.css$': 'identity-obj-proxy',
    },
    // Jest'in React bileşenlerini test etmesi için gerekli olan babel preset
    preset: 'react',
    // Jest'in çalışma ortamı
    testEnvironment: 'jsdom',
    
  };
  