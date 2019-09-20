const db = require('../data/dbConfig');

const Fluffies = require('./fluffies-model');

describe('fluffies model', () => {
    beforeEach(async () => {
        await db('fluffies').truncate();
    });
    describe('insert()', () => {
        it('should insert fluffies into the db', async () => {
            await Fluffies.insert({ name: 'Duckling' });
            await Fluffies.insert({ name: 'Gosling' });
            await Fluffies.insert({ name: 'Benjamin' });
            await Fluffies.insert({ name: 'New Fluffy' });
            let fluffies = await db('fluffies');
            console.log(fluffies);
            expect(fluffies).toHaveLength(4);
        });
        it('should insert fluffies into the db', async () => {
            const [id] = await Fluffies.insert({ name: 'Newest Fluff' });
            let fluffy = await db('fluffies')
                .where({ id })
                .first();
            expect(fluffy.name).toBe('Newest Fluff');
        });
    });
    describe('remove()', () => {
        it('should remove fluffies from the db', async () => {
            await Fluffies.insert({ name: 'New Fluffy' });
            await Fluffies.insert({ name: 'Newest Fluff' });
            let fluffies = await db('fluffies');
            console.log(fluffies);
            expect(fluffies).toHaveLength(2);
            //remove a record
            const [id] = await db('fluffies')[2].remove(id);
            let fluffy = await db('fluffies');
            expect(Fluffies).not.toHaveLength(2)
        });
    });
});
