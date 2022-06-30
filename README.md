

1. Wewnątrz pliku src/players.js umieść tablicę (array) players z 10 obiektami symbolizującym użytkowników - niech posiadają atrybuty: username typu string oraz points typu number (niech będą to liczby całkowite).

Wyeksportuj domyślnie tablicę players z pliku src/players.js używając export default

W pliku src/App.js zaimportuj tablicę z pliu src/players.js

Wyrenderuj tablicę HTMLową (

) zawierającą nagłówki Username oraz Points - w każdym wierszu wyświetl dane poszczególnych obiektów z tablicy zaimportowanej z pliku src/players.js
Część 2 - podsumowanie
Wyświetl w tablicy dodatkowy wiersz na samym dole, w którym w kolumnie z nagłówkiem Points znajdzie się liczba będąca sumą wszystkich punktów zdobytych przez graczy. W kolumnie Username w tym wierszu niech znajdzie się etykieta Total

Poniżej tego wiersza dodaj kolejny wiersz, w którym wyświetlimy analogicznie średnią punktów z etykietą Average

Część 3 - wyróżnianie
Jeżeli w pliku src/players.js nie posiadasz żadnego gracza z liczbą punktów większą niż 100, to dodaj jednego lub zmień punkty dla któregoś z już istniejących.

W pliku src/App.js zmodyfikuj metodę render w taki sposób, żeby wiersze z graczami posiadającymi więcej niż 100 punktów były wyróżnione (np. posiadały czerwone tło i biały tekst)

Część 4 - pobieranie danych ze stanu komponentu
Utwórz w komponencie stan i zapisz w nim informację o aktualnie włączonym kolorze wyróżniania, np. const [highlightingColor, setHighlightingColor] = useState('red')

Wykorzystaj tę informację zamiast koloru użytego w poprzednim zadaniu.

Część 5 - interakcja
Dodaj nad tabelką 2 przyciski z etykitami Red oraz Blue.

Spraw, żeby kliknięcie w każdy z tych przycisków powodowało zmianę aktualnie używanego koloru wyróżnienia zawodników w tabelce.