import { Game } from './game';

export const GAMES: Game[] = [
    { 
        id: 'NES-SM-USA',
        name: 'Super Mario Brothers',
        esrb: 'E',
        owned: true
    },
    { id: 'NES-DH-USA', name: 'Duck Hunt', owned: true },
    { id: 'NES-EB-USA', name: 'Excitebike' },
    { id: 'NES-GY-USA', name: 'Gyromite', owned: false },
    { id: 'NES-AL-USA', name: 'Zelda II: The Adventure of Link', owned: true },
    { id: 'NES-EI-USA', name: 'Tetris' },
    { 
        id: 'NES-TY-USA',
        name: '10-Yard Fight',
        owned: false,
        publisher: 'Nintendo',
        developer: 'Irem',
        region: 'NTSC (N. America)',
        releaseDate: new Date(),
        esrb: 'E',
        players: '2',
        upc: '045496630270',
        board: 'NES-NROM-256'
    },
    { id: 'NES-BA-USA', name: 'Baseball', owned: true }
];
