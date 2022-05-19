const repository = require('../repositories/jogadoresRepository.js')
const services = require('../services/jogadoresService.js')

var chai = require('chai')
const expect = chai.expect
sinon = require('sinon'); 
describe('Testes da funcionalidade da api', async () => {
    const sandbox = sinon.createSandbox({});
  
    console.log('sandbox')
  
    afterEach(() => {
      sandbox.restore();
    })
    it('calcula quantidade certa de premios', async () => {
            const findJogadorStub = sandbox.stub(repository, 'jogadorBusca').resolves([
          {
            _id: '1',
            name: 'João',
            coins: 75
          }
        ])
     const response = await services.lerJogador();
        expect(response).to.be.deep.equal([
          {
            _id: '1',
            name: 'João',
            coins: 75,
            medals: 7,
            trophies: 2
          }
        ])
      })
      it('calcula quantidade certa de premios - erro', async () => {
        const findJogadorStub = sandbox.stub(repository, 'jogadorBusca').resolves([
      {
        _id: '1',
        name: 'João',
        coins: 75
      }
    ])
 const response = await services.lerJogador();
    expect(response).to.be.deep.equal([
      {
        _id: '1',
        name: 'João',
        coins: 75,
        medals: 9,
        trophies: 2
      }
    ])
  })
})