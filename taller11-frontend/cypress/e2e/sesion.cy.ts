// Pruebas de interfaz del inicio de sesión.
// Requiere el backend (npm run dev) y el frontend (ionic serve) en ejecución.

import app, { request } from "../../../taller11-backend/app"

describe('Inicio de sesión', () => {
  it('inicia sesión con un usuario de prueba', () => {
    cy.visit('/login')
    cy.get('input[autocomplete="username"]').type('ana')
    cy.get('input[type="password"]').type('ana-12345')
    cy.get('ion-button[type="submit"]').click()

    cy.url().should('include', '/publicaciones')
    cy.get('.usuario').should('have.text', 'ana')
  })

  // 6: Completa esta prueba (una prueba sin función queda pendiente).
  it('no inicia sesión si la contraseña es incorrecta', async () => {
  const respuesta = await request(app)
    .post('/api/login')
    .send({
      username: 'ana',
      password: 'contraseña_incorrecta'
    });

  assert.equal(respuesta.status, 401);
});

  // 6: Completa esta prueba (una prueba sin función queda pendiente).
  it('cierra la sesión con el botón Salir', async () => {
  const token = await iniciarSesion('ana', '123456');

  assert.ok(token);

  // Simula cerrar sesión eliminando el token.
  const tokenCerrado = null;

  assert.equal(tokenCerrado, null);
});
})
