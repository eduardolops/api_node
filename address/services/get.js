import cepService from 'cep-promise'


export default (req, res) => {

    cepService(req.params.cep)
      .then( result => res.status(200).json( { status: true, data: result } )  )
      .catch( err => res.status(404).json( { status: false, data: { msg: 'Cep not found' } } ) )

}