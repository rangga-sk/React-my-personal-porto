import { createContext, useContext } from 'react';

export const PortfolioContext = createContext(null);

export function usePortfolio() {
  const value = useContext(PortfolioContext);
  if (!value) throw new Error('usePortfolio must be used inside PortfolioContext.Provider');
  return value;
}
