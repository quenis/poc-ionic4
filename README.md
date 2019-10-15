## Começando

Essas instruções farão com que você tenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Veja a descrição abaixo sobre como implantar o projeto em um sistema ativo.

### Pré-requisitos

* [Node.js](https://nodejs.org)

* Ionic e Cordova:
```
$ npm install -g ionic cordova
```

### Instalando

```
$ git clone https://github.com/quenis/poc-ionic4.git (Clona o projeto)
$ cd poc-ionic4 (Navega até o projeto)
$ npm install (Instala as dependências do projeto)
$ ionic serve (Roda o aplicativo em um servidor de aplicação local do ionic na porta 8100)
```

### Desenvolvimento

*Para o desenvolvimento pode ser usado qualquer editor de código como, por exemplo, [Visual Studio Code](https://code.visualstudio.com/), [Sublime](https://www.sublimetext.com/) etc.*

**Servidor web do Ionic:**

Caso ocorra um erro ao você executar o comando **$ ionic serve** dizendo que falta a dependência **ionic-scripts**, execute o seguinte comando:

```
npm cache clean --force
npm install @ionic/app-scripts@latest
```


**Android:**

*Pré-requisitos*

* [Java JDK 1.8.0_191](https://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html)
* [Android Studio](https://developer.android.com/studio/index.html)

Para executar seu aplicativo, tudo o que você precisa fazer é ativar a depuração USB e o modo de desenvolvedor no seu dispositivo Android e, em seguida, executar o comando **$ ionic cordova run android --device** a partir da linha de comando.

Habilitar a depuração USB e o modo de desenvolvedor pode variar entre os dispositivos, mas é fácil procurar em uma pesquisa do Google. Você também pode acessar à [Ativação de opções de desenvolvedor no dispositivo](https://developer.android.com/studio/run/device#developer-device-options) nos documentos do Android.


**iOS:**

*Pré-requisitos*

* Xcode 7 ou Superior
* iOS 9
* Um ID da Apple gratuito ou uma conta de desenvolvedor paga da Apple

Para executar seu aplicativo, execute esses passos:

1. Execute uma compilação de produção do seu aplicativo com **$ ionic cordova build ios --prod**
2. Abra o arquivo **.xcodeproj** em **platforms/ios/** no Xcode
3. Conecte seu telefone via USB e selecione-o como destino de execução
4. Clique no botão de reprodução no Xcode para tentar executar seu aplicativo
