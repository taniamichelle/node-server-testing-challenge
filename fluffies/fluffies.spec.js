const db = require('../data/dbConfig');

const Fluffies = require('./fluffies-model');

describe('fluffies model', () => {
    beforeEach(async () => {
        await db('fluffies').truncate();
    });
    it('should set environment to be testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
    describe('insert()', () => {
        it('should insert fluffies into the db', async () => {
            await Fluffies.insert({ name: 'Duckilng' });
            await Fluffies.insert({ name: 'Gosling' });
            await Fluffies.insert({ name: 'Benjamin' });
            await Fluffies.insert({ name: 'New Fluffy' });
            console.log(fluffies);
            expect(fluffies).toHaveLength(1);
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
            // console.log(fluffies);
            expect(fluffies).toHaveLength(1);
            //remove a record
            const [id] = await db('fluffies')[0].id.remove(id);
            let fluffy = await db('fluffies');
            expect(Fluffies).not.toHaveLength(1)
        });
    });
});
