import {useState} from 'react'; //Ramificação para ajustar esse trecho de import :  import {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'; //Ramificação para ajustar esse trecho de component Button inutilizado

export default function App() {
  // Mapeamento de teclas
  const buttons = [
    'LIMPAR',
    'DEL',
    '%',
    '/',
    7,
    8,
    9,
    'x',
    6,
    5,
    4,
    '-',
    3,
    2,
    1,
    '+',
    0,
    '.',
    '+/-',
    '=',
  ];

  //Ramificação para incluir sinal ;
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState(''); //aqui deve conter ;

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    const firstNumber = parseFloat(splitNumbers[0]); //Ramificação de correção ortográfica de Aqui fistNumber para firstNumber .Aqui deve conter ;
    const lastNumber = parseFloat(splitNumbers[2]); //Ramificação para forma certa mudar para : const secondNumber = parseFloat(splitNumbers[2]); Aqui deve conter ;
    const operator = splitNumbers[1]; // Aqui deve conter ;

    // Faz ação referente tecla pressionada
    switch (operator) {
      case '+':
        setCurrentNumber((firstNumber + lastNumber).toString());
        break; //Corrigir escrita para firstNumber .Aqui precisa do comando break
      case '-':
        setCurrentNumber((firstNumber - lastNumber).toString());
        break; //Corrigir escrita para firstNumber.Aqui precisa do comando break ;

      case 'x': //Correção aqui segue a forma certa da multiplicação:setCurrentNumber((fistNumber * lastNumber).toString())
        setCurrentNumber((firstNumber * lastNumber).toString());
        break; //Corrigir escrita para firstNumber.Aqui precisa do comando break ;
      case '/':
        setCurrentNumber((firstNumber / lastNumber).toString());
        break;
    }
  }
  function handleInput(buttonPressed) {
    console.log(buttonPressed);
    if (
      buttonPressed === '+' ||
      buttonPressed === '-' ||
      buttonPressed === 'x' ||
      buttonPressed === '/'
    ) {
      setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
      return; //Aqui pede sinal de ;
    }
    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 2));
        break; //Aqui incluir ;break;
        return;
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber('');
        setCurrentNumber('');
        break;
    }

    //Ramificação de Correção aqui segue a forma certa da divisão: setCurrentNumber((fistNumber / lastNumber).toString())

    //Aqui precisa do comando break ; default: break; ////Ramificação de correção para erro de texto firstNumber
    //Ramificação para exclusão de return

    // Aqui pede sinal de ;Mostra no Console a tecla pressionada

    // Ramificação para operador OR '|' deve ser '||' pois se trata de condição buttonPressed.buttonPressed === '+' || buttonPressed === "-" || buttonPressed === "x" || buttonPressed === "/".

    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 2));
        break; //Aqui incluir ;break;
        return;
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber('');
        setCurrentNumber('');
        break; //Aqui inclusão de ;Incluir break;
        return;
      case '=':
        setLastNumber(currentNumber + ' = '); //Aqui incluir sinal;
        calculator();
        break;
      case '+/-':
        break;
      default:
        setCurrentNumber(currentNumber + buttonPressed);
        break;
    }
  } //Adicione a lógica para inverter o sinal do número atual//Aqui incluir sinal ;

  //Ramificação para posicionamento de return
  //Vai ficar assim antes de return : case '+/-': //Adicionar logica para  inverter o sinal do numero atual break;    setCurrentNumber(currentNumber + buttonPressed);break;

  //case '+/setCurrentNumber(currentNumber + buttonPressed);break; }
  //}
  //Ramificação de exclusão return

  //incluir break;
  // default:
  //Ramificação de inclusão :   setCurrentNumber(currentNumber + buttonPressed)
  //Incluir break;
  //Ramificação de exclusão de return desnecessário no código

  return (
    <View style={styles.container}>
      {/* Area onde o resultado é exibido */}
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      {/** aqui vai entrar essa </View> */}

      {/* Area onde os botões são exibidos*/}
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' ? ( // Ramificação para incluir sinal de ( Aqui array do map  // Mapeamento do botão =
            <TouchableOpacity
              onPress={() => handleInput(button)}
              key={button}
              style={[styles.button, {backgroundColor: '#3dd0e3'}]}>
              <Text style={[styles.textButton, {color: 'white', fontSize: 30}]}>
                {button}
              </Text>
            </TouchableOpacity>
          ) : (
            // Ramificação para incluir sinal de ( Aquiarray do map // Mapeamento dos outros botões
            <TouchableOpacity
              onPress={() => handleInput(button)}
              key={button}
              style={styles.button}>
              <Text
                style={[
                  styles.textButton,
                  {color: typeof button === 'number' ? 'black' : '#0093a6'},
                ]}>
                {button}
              </Text>
            </TouchableOpacity>
          ),
        )}
      </View>
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  resultText: {
    color: '#282F38',
    fontSize: 32,
    fontWeight: 'bold',
    padding: 12,
    textAlign: 'right',
  },
  historyText: {
    color: '#7c7c7c',
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  textButton: {
    color: '#7c7c7c',
    fontSize: 20,
  },
});
//git =>init
//Clonagem
// Comando de ramificação {git checkout -b funcionalidade_x(git checkout -b tela_login)} (nome significativo)(inclusão de ponto e virgula etc)
//Deletar ramificação git branch -d funcionalidade_x
//git merge master junta a ramificação feita
//Github => git add (para adicionar index) git commnit -m ''(salvar na rede) git push origin(nome da ramificação vai para o github) master
//git checkout mudar de ramificação para outra
// Git log=> alterações e nome de quem fez.
//git log -p =>detalhamento de alterações incluídas em cada commit
//git log --oneline lista simplificada dos commits (pode ser útil para automações):
// $ git log -5 => últimos 5 commits:
//git log --merges =
