const repository = require('../repositories/jogadoresRepository.js')
const services = require('../services/jogadoresService.js')
const chaiHttp = require('chai-http')
const chai = require('chai')

chai.use(chaiHttp)
const expect = chai.expect
const sinon = require('sinon'); 
describe('Testes da funcionalidade da api', async () => {
    const sandbox = sinon.createSandbox({});

    afterEach(() => {
      sandbox.restore();
    })
    
    it('calcula quantidade certa de premios', async () => {
      const findJogadorStub = sandbox.stub(repository, 'jogadorBusca').resolves([
        {
          _id: '1',
          nome: 'João',
          moedas: 75
        }
      ])
     const response = await services.lerJogador();
        expect(response).to.be.deep.equal([
          {
            _id: '1',
            nome: 'João',
            moedas: 75,
            medalhas: 7,
            trofeus: 2
          }
        ])
      })
  it('calcula quantidade certa de premios - erro', async () => {
    sandbox.stub(repository, 'jogadorBusca').resolves([
      {
        _id: '1',
        nome: 'João',
        moedas: 75
      }
    ])
    
    const response = await services.lerJogador();
    
    expect(response).to.be.deep.equal([
      {
        _id: '1',
        nome: 'João',
        moedas: 75,
        medalhas: 7,
        trofeus: 2
      }
    ])
  })
  it('should return an empty array if the I dont have any data saved on database', async () =>{
 
    sandbox.stub(repository, "jogadorBusca").resolves([]);

    const response = await services.lerJogador();
 
    expect(response).to.be.deep.equal([]);
  })
  it('should confirm if the method jogadorDelete is called', async () => {
 
    const stubDelete = sandbox.stub(repository, "jogadorDeleta")
 
    await services.excluiJogador()

    sinon.assert.calledOnce(stubDelete);
  })

  // it('Get jogadores - status', () =>{
  //   chai.request('http://localhost:3000')
  //     .get('/jogadores')
  //     .end(function(err, res) {
  //       expect(res).to.have.status(201);   
  //     });
  // });
  // it.skip('Post jogadores - status', () =>{
  //   chai.request('http://localhost:3000')
  //     .post('/jogadores')
  //     .send({
  //       "name" : "Lucio",
  //     	"coins" : 143
  //     })
  //     .end((err, res) => {
  //       chai.expect(res).to.have.status(201); 
  //     });
  // });
  // it('Put jogadores - status', () =>{
  //   chai.request('http://localhost:3000')
  //     .put('/jogadores/628414e908b7922aab930001')
  //     .send({
  //     	"coins" : 400
  //     })
  //     .end((err, res) => {
  //       chai.expect(res).to.have.status(201); 
  //     });
  // });
  
  // it.skip('Delete jogadores - status', () =>{
  //   chai.request('http://localhost:3000')
  //     .delete('/jogadores/')
  //     .end((err, res) => {
  //       chai.expect(res).to.have.status(201); 
  //     });
  // });
})