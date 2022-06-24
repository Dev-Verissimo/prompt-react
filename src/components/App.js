export default function App() {
  const nome = prompt("qual é o seu nome");
  return (
    <div>
      <div class="wordart rainbow">
        <div class="text">Bem vindo, {nome.length != 0 ? nome : "Fulano"}!</div>
      </div>
      <div class="wordart blues">
        <div class="text">Como vai você?</div>
      </div>
    </div>
  );
}
