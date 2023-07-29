async function cv(conn, from, prefix, quoted, info, NomeDoBot) {

sections = [
    {
	t́itle: "Section 1",
	rows: [               
									{
									 	"title": "Registrar",
										"rowId": `${prefix}ent`
									},
																		{
									 	"title": "pessoas registradas",
										"rowId": `${prefix}user`
									},
									{
										"title": "Fazer sorteio",
										"rowId": `${prefix}users`
									}
                        ]
},
]

listMessage = {
  text: `REGISTRAR PESSOAS`,
  footer: `...`,
buttonText: "Clique aqui",
  sections
}

conn.sendMessage(from, listMessage, {quoted: info})

}

exports.cv = cv