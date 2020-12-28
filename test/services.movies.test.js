const assert = require('assert');
const proxyquire = require('proxyquire');
const {MongoLibMock, getAllStub } = require('../utils/mocks/mongolib');
const { moviesMock } = require('../utils/mocks/movies');

describe("services - movies", function() {
    const MoviesService = proxyquire('../services/movies', {
        '../lib/mongo.js' : MongoLibMock
    });
    const moviesServices = new MoviesService();
    describe("when getMovies method is called", async function () {
        it('should call the getall MongoLib method', async function () {
            await moviesServices.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });
        it('should return an array of movies', async function () {
            const result = await moviesServices.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected);
        })
    })
})

