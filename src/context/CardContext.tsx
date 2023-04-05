import React from "react";

export interface Card {
	name: string;
	cc_number: number;
	cc_month: number;
	cc_year: number;
	cc_cvc: number;
}

interface CardProviderProps {
	data: Card | null;
	setData: React.Dispatch<React.SetStateAction<Card | null>>;
}

const CardContext = React.createContext<CardProviderProps>(
	{} as CardProviderProps
);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
	const [data, setData] = React.useState<Card | null>(null);
	return (
		<CardContext.Provider value={{ data, setData }}>
			{children}
		</CardContext.Provider>
	);
};

export const useCard = () => React.useContext(CardContext);
