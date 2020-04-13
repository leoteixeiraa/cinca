-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 13/04/2020 às 18:52
-- Versão do servidor: 10.4.6-MariaDB
-- Versão do PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cincadb`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcoes`
--

CREATE TABLE `funcoes` (
  `idFun` int(11) NOT NULL,
  `nome` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `mandato`
--

CREATE TABLE `mandato` (
  `idMandato` int(11) NOT NULL,
  `descricao` varchar(45) NOT NULL,
  `dataInicio` date DEFAULT NULL,
  `dataFinal` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `pessoa`
--

CREATE TABLE `pessoa` (
  `idPessoa` int(11) NOT NULL,
  `funcoes_idFun` int(11) NOT NULL,
  `mandato_idMandato` int(11) NOT NULL,
  `tipo_pessoa` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `pessoaFisica`
--

CREATE TABLE `pessoaFisica` (
  `idPFisica` int(11) NOT NULL,
  `nome` varchar(145) NOT NULL,
  `cpf` varchar(45) NOT NULL,
  `rg` varchar(45) DEFAULT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  `dataNascimento` varchar(45) NOT NULL,
  `estadoCivil` varchar(45) DEFAULT NULL,
  `cep` varchar(45) DEFAULT NULL,
  `endereco` varchar(45) NOT NULL,
  `complemento` varchar(45) DEFAULT NULL,
  `cidade` varchar(45) NOT NULL,
  `bairro` varchar(45) NOT NULL,
  `uf` varchar(45) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `pessoaFisica`
--

INSERT INTO `pessoaFisica` (`idPFisica`, `nome`, `cpf`, `rg`, `sexo`, `dataNascimento`, `estadoCivil`, `cep`, `endereco`, `complemento`, `cidade`, `bairro`, `uf`, `telefone`, `email`) VALUES
(1, 'Leonardo Venâncio Teixeira', '21745985470', '41558975', 'Masculino', '16021999', 'Solteiro', '8958000', 'Rua Cincatarina', 'APTO 01', 'Fraiburgo', 'Centro', 'SC', '12996253536', 'leonardo@cincatarina.sc.gov.br'),
(2, 'teste', '231223', '2132123', '123123', '213', '312213', '213231', '23123', '213', '213231', '2312312', '31231231', '231', '32123');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pessoaJuridica`
--

CREATE TABLE `pessoaJuridica` (
  `idPJuridica` int(11) NOT NULL,
  `razaoSocial` varchar(150) NOT NULL,
  `cnpj` varchar(45) NOT NULL,
  `status` varchar(10) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `complemento` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `cidade` varchar(45) NOT NULL,
  `bairro` varchar(45) DEFAULT NULL,
  `numero` varchar(10) DEFAULT NULL,
  `pontoReferencia` varchar(45) DEFAULT NULL,
  `cep` varchar(10) DEFAULT NULL,
  `uf` varchar(3) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `site` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='	';

--
-- Despejando dados para a tabela `pessoaJuridica`
--

INSERT INTO `pessoaJuridica` (`idPJuridica`, `razaoSocial`, `cnpj`, `status`, `endereco`, `complemento`, `cidade`, `bairro`, `numero`, `pontoReferencia`, `cep`, `uf`, `email`, `telefone`, `site`) VALUES
(1, 'CINCATARINA', '45.964.006/0001-17', 'Inativo', 'Rua Nereu Ramos', 'Andar', 'Fraiburgo', 'Centro', '55', 'Lado da Papelaria Central', '89580000', 'SC', 'cincatarina@cincatarina.sc.gov.br', '(48) 3380 1621', 'https://www.cincatarina.sc.gov.br/'),
(13, 'IFC FRAIBURGO', '92.499.216/0001-61', 'Ativo', ' R. Cruz e Souza', 'APTO NÂº 01', 'Fraiburgo', 'Centro', '41', 'Sorveteria', '89580000', 'UF', 'leo@gmail.com', '12342', 'www.ifc.edu.br'),
(14, 'Papelaria Central', '36.901.265/0001-08', 'Inativo', 'Rua Dom Pedro I', 'asdmasmd', 'FlorianÃ³polis', 'SÃ£o JosÃ©', '23', 'em baixo do CINCATARINA', '289223700', 'SC', 'papelaria@hotmail.com', '2299772256', 'www.papelaria.com'),
(15, 'Subway', '27.001.046/0001-81', 'Ativo', 'Rua Alemanha', 'apto 45', 'SÃ£o Pedro', 'Jardim EsperanÃ§a', '42', 'perto da rodoviÃ¡ria', '28933567', 'RJ', 'subway.contato@gmail.com', '4926874563', 'www.subway.com.br'),
(16, 'IFSC', '27.001.046/0001-81', 'Ativo', 'Rua FranÃ§a', 'apt 01', 'Videira', 'SÃ£o JosÃ©', '76', 'perto do lago', '32988370', 'MT', 'ifsc@edu.br', '(48) 2567 9876', 'www.ifsc.edu.br');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `idUser` int(11) NOT NULL,
  `login` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `dthrcad` date DEFAULT NULL,
  `identidade_idPessoa` int(11) NOT NULL,
  `PessoaFisica_idPFisica` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `funcoes`
--
ALTER TABLE `funcoes`
  ADD PRIMARY KEY (`idFun`);

--
-- Índices de tabela `mandato`
--
ALTER TABLE `mandato`
  ADD PRIMARY KEY (`idMandato`);

--
-- Índices de tabela `pessoa`
--
ALTER TABLE `pessoa`
  ADD PRIMARY KEY (`idPessoa`),
  ADD KEY `fk_identidade_funcoes1_idx` (`funcoes_idFun`),
  ADD KEY `fk_identidade_mandato1_idx` (`mandato_idMandato`);

--
-- Índices de tabela `pessoaFisica`
--
ALTER TABLE `pessoaFisica`
  ADD PRIMARY KEY (`idPFisica`);

--
-- Índices de tabela `pessoaJuridica`
--
ALTER TABLE `pessoaJuridica`
  ADD PRIMARY KEY (`idPJuridica`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `fk_usuario_identidade_idx` (`identidade_idPessoa`),
  ADD KEY `fk_Usuarios_PessoaFisica1_idx` (`PessoaFisica_idPFisica`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `funcoes`
--
ALTER TABLE `funcoes`
  MODIFY `idFun` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `mandato`
--
ALTER TABLE `mandato`
  MODIFY `idMandato` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `pessoa`
--
ALTER TABLE `pessoa`
  MODIFY `idPessoa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `pessoaFisica`
--
ALTER TABLE `pessoaFisica`
  MODIFY `idPFisica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `pessoaJuridica`
--
ALTER TABLE `pessoaJuridica`
  MODIFY `idPJuridica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `pessoa`
--
ALTER TABLE `pessoa`
  ADD CONSTRAINT `fk_identidade_funcoes1` FOREIGN KEY (`funcoes_idFun`) REFERENCES `funcoes` (`idFun`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_identidade_mandato1` FOREIGN KEY (`mandato_idMandato`) REFERENCES `mandato` (`idMandato`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_Usuarios_PessoaFisica1` FOREIGN KEY (`PessoaFisica_idPFisica`) REFERENCES `pessoaFisica` (`idPFisica`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuario_identidade` FOREIGN KEY (`identidade_idPessoa`) REFERENCES `pessoa` (`idPessoa`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
