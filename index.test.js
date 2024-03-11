import { ErrorRepository } from './index.js'

describe('Класс ErrorRepository', () => {
    let errorRepository;

    beforeEach(() => {
        errorRepository = new ErrorRepository();
    });

    describe('Метод translate', () => {
        it('Переводит код ошибки в текстовое описание', () => {
            errorRepository.errors.set(1, 'Ошибка 1');
            expect(errorRepository.translate(1)).toBe('Ошибка 1');
        });

        it('Возвращает "Unknown error", если код ошибки не найден', () => {
            expect(errorRepository.translate(2)).toBe('Unknown error');
        });
    });
});



