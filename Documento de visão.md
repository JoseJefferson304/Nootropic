# Documento de Visão

## Sistema do Nootropic

### 1. Objetivo do Projeto 

O Nootropic é um site organizacional projetado para ajudar as pessoas com TDAH a gerenciar melhor seus estudos, aumentar sua produtividade e melhorar sua qualidade de vida.

### 2. Descrição do Problema 

|         __        | __   |
|:------------------|:-----|
| **_O problema_**    | Pessoas com TDAH que muitas vezes têm dificuldades para gerenciar suas tarefas diárias, compromissos e projetos, devido à falta de atenção, hiperatividade e impulsividade. |
| **_afetando_**      | Indivíduos de todas as idades que têm TDAH, mas especialmente aqueles que estão na escola ou no ambiente de trabalho, onde as expectativas de desempenho são altas e o gerenciamento de tarefas é crucial. |
| **_cujo impacto é_**| O estresse e a ansiedade decorrentes da luta para manter-se organizado e cumprir prazos podem prejudicar a saúde mental e a qualidade de vida das pessoas afetadas. |
| **_uma boa solução seria_** | O Nootropic é a solução para ajudar as pessoas com TDAH a gerenciar suas tarefas diárias e projetos de forma mais eficaz, aumentar sua produtividade e reduzir o estresse associado a essas atividades.|




### 3. Descrição dos Usuários

| Nome | Descrição | Responsabilidades |
|:---  |:--- |:--- |
| Administrador  | Donos do Site | Gerenciamento de usuários, Análise de dados e Segurança. |
| Usuário |  Pessoas que utilizam do site | Os usuários do Nootropic possuem acesso a: Gerenciamento de tarefas, Lembretes e notificações, Personalização da interface, Acesso móvel, Conteúdo educacional. |

### 4. Descrição do Ambiente dos Usuários

O ambiente do site Nootropic é online, acessível através de um navegador web e dispositivos móveis. 

Como o objetivo do site é ajudar as pessoas com TDAH a gerenciar suas tarefas e projetos de forma mais eficaz, ele foi projetado para ser facilmente acessível e utilizável em qualquer dispositivo conectado à internet, permitindo aos usuários gerenciar suas atividades em qualquer lugar e a qualquer momento. 

O ambiente do site é amigável e intuitivo, com uma interface de usuário simples e recursos poderosos para ajudar os usuários a gerenciar suas tarefas e compromissos com facilidade e eficiência.

### 5. Principais Necessidades dos Usuários

Para o administrador, sua principal necessidade é manter o cadastro dos funcionarios para fazerem os serviços que ele manda.

Para o funcionário, sua principal obrigação será marcar os horarios em que ele estará disponível para os cortes, além de realizar os cortes em sí.

O cliente precisará encontrar bons profissionais com horários convenientes para ele.

### 6.	Alternativas Concorrentes

Alternativas concorrentes seriam as redes sociais num geral, como whatsapp ou instagram, pois nelas o cliente poderia entrar em contato com o profissional e agendar o serviço desejado. 

Porém essas plataformas não são específicas para esse tipo de interação, portanto seria bastante possível que com o número muito alto de pedidos, houvesse problemas no agendamento.

### 7.	Visão Geral do Produto

Basicamente nosso sistema procura a maior eficiencia do agendamento, confirmação, especificação e cancelamento do serviço. Além de promover o próprio negócio com o site.

### 8. Requisitos Funcionais

| Código | Nome | Descrição |
|:---  |:--- |:--- |
| RF01 | Visitar o sistema | O usuário visita o site, checa cortes, horários e serviços disponíveis, mas sem realizar agendamento algum. |
| RF02 | Cadastro do cliente | O usuário se cadastra no sistema, ele pode atualizar os dados já postos ou excluir o próprio cadastro. Assim podendo realizar os agendamentos.   |
| RF03 | Cadastrar funcionario | O administrador fica responsável por realizar o cadastro ou excluir o cadastro dos funcionários. |
| RF04 | Consulta de agendas |  O cliente consulta os horarios disponiveis em determinados dias, podendo escolher o horario mais adequado para o atendimento e a realização do serviço. |
| RF05 | Gerenciamento de Serviços | Adm mantém a relação de serviços prestados pela empresa ou profissional. |
| RF07 | Gerenciamento da Agenda | ADM registra os horários disponíveis de atendimento. |
| RF08 | Cadastro de atendimento | O cliente marca o corte no horário em que o funcionário está disponível |

### 9. Requisitos Não-funcionais

 |Código | Nome | Descrição | Categoria | Classificação|
|:---  |:--- |:--- |:--- |:--- |
| RNF01 | Design responsivo | O sistema deve adaptar-se a qualquer tamanho de tela de dispositivo, seja, computador, tablets ou smart phones. | Usabilidade| Obrigatório |
| RNF02 | Criptografia de dados| Senhas de usuários devem ser gravadas de forma criptografada no banco de dados. | Segurança | Obrigatório |
| RNF03 | Controle de acesso | Só usuários autenticados podem ter acesso ao sistema, com exceção ao auto cadastramento do usuário. | Segurança | Obrigatório |
| RNF04 | Tempo de resposta |A comunicação entre o servidor e o cliente deve ocorrer em tempo hábil | Performance | Desejável |
| RNF05 | Sistema Web | A aplicação deve ser um site. | Arquitetura | Obrigatório |
| RNF06 | Dados pessoais | Os clientes não devem visualizar dados de outros clientes (na agenda, por exemplo). | Privacidade | Obrigatório |
