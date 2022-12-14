let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// ====================================================

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', tril)
frontend.addEventListener('animationend', tril)

function tril() {
  frontend.classList.toggle('tril')
}

// ==========================================================

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', vergroot)
design.addEventListener('animationend', vergroot)

function vergroot() {
  design.classList.toggle('vergroot')
}

// =====================================================

let en = document.querySelector('a:nth-of-type(3)')

en.addEventListener('click', draai)
en.addEventListener('animationend', draai)

function draai() {
  en.classList.toggle('draai')
}

// ==========================================================

let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', kleur)
development.addEventListener('animationend', kleur)

function kleur() {
  development.classList.toggle('kleur')
}

// ===========================================================

let sprint = document.querySelector('a:nth-of-type(5)')

sprint.addEventListener('click', vorm)
sprint.addEventListener('animationend', vorm)

function vorm() {
  sprint.classList.toggle('vorm')
}

// ===========================================================

let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', rotate)
fix.addEventListener('animationend', rotate)

function rotate() {
  fix.classList.toggle('rotate')
}

// ===========================================================

let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('click', vol)
the.addEventListener('animationend', vol)

function vol() {
  the.classList.toggle('vol')
}

// ===========================================================

let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('click', omgedraaid)
flow.addEventListener('animationend', omgedraaid)

function omgedraaid() {
  flow.classList.toggle('omgedraaid')
}

// ===========================================================

let user = document.querySelector('a:nth-of-type(9)')

user.addEventListener('click', verplaats)
user.addEventListener('animationend', verplaats)

function verplaats() {
  user.classList.toggle('verplaats')
}

// ===========================================================

let interface = document.querySelector('a:nth-of-type(10)')

interface.addEventListener('click', schud)
interface.addEventListener('animationend', schud)

function schud() {
  interface.classList.toggle('schud')
}