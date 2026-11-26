'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Reveal } from '@/components/sections/Reveal';
import { SimulationForm } from '@/components/sections/SimulationForm';
import { Icon, type IconName } from '@/components/Icon';

const nav = ['Início', 'Sobre', 'Soluções', 'Como funciona', 'Obras', 'FAQ'];
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '558898347697';
const whatsappUrl = `https://wa.me/${whatsappNumber}`;
const solutions = [
  ['Residencial', 'Um sistema desenhado para o ritmo e o consumo da sua casa.', 'home'],
  ['Empresarial', 'Energia para reduzir custos e dar previsibilidade à operação.', 'business'],
  ['Propriedades rurais', 'Geração para fazer a energia trabalhar em cada hectare.', 'rural'],
  ['Manutenção e monitoramento', 'Acompanhamento para manter o seu sistema produzindo bem.', 'maintenance']
];
const faqs = [
  ['Quanto custa um sistema solar?', 'O investimento depende do seu consumo, telhado e padrão de entrada. A simulação gratuita dimensiona o projeto para a sua realidade.'],
  ['A Soltex atende quais cidades?', 'A Soltex Energia Solar atende Aurora e região. Informe sua cidade na simulação para confirmar a melhor rota de atendimento.'],
  ['Quanto tempo demora a instalação?', 'O prazo é definido após a análise técnica e também considera a etapa de homologação junto à distribuidora.'],
  ['Funciona em dia nublado?', 'Sim. A geração pode diminuir em condições de menor irradiação, mas o sistema continua produzindo energia.'],
  ['Preciso fazer manutenção?', 'A limpeza e a inspeção periódicas ajudam a preservar o desempenho. A necessidade varia conforme o local e o sistema.'],
  ['Como funciona o financiamento?', 'As possibilidades de pagamento são avaliadas na proposta, de acordo com o projeto e a disponibilidade de crédito.'],
  ['O que acontece com o excedente?', 'Em sistemas conectados à rede, a energia excedente pode virar créditos conforme as regras da sua distribuidora.']
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <main id="conteudo">
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="header"><a className="brand" href="#inicio" aria-label="Soltex Energia Solar - início"><Image src="/soltex-logo.png" alt="Soltex Energia Solar" width={150} height={110} priority/></a><nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegação principal">{nav.map((item) => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>)}<a className="button button-solar nav-cta" href="#simulacao">Simular economia <Icon name="arrow-up-right"/></a></nav><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu"><i></i><i></i></button></header>
    <section id="inicio" className="hero"><div className="panel-grid" aria-hidden="true"/><div className="sun-rays" aria-hidden="true">{Array.from({ length: 13 }).map((_, i) => <b key={i} style={{ transform: `rotate(${i * 14 - 84}deg)` }}/>)}</div><div className="wrap hero-layout"><Reveal className="hero-copy"><p className="eyebrow"><span/> Soltex Energia Solar</p><h1>Energia que transforma. <mark>Economia que permanece.</mark></h1><p className="hero-text">Projetos solares personalizados para residências, empresas e propriedades rurais em Aurora e região. Da engenharia à homologação, a Soltex cuida do caminho inteiro.</p><div className="hero-actions"><a className="button button-solar" href="#simulacao">Simular minha economia <Icon name="arrow-up-right"/></a></div></Reveal><div className="hero-visual"><div className="image-frame"><Image src="/soltex-projeto-01.jpg" alt="Sistema de energia solar instalado pela Soltex" fill priority sizes="(max-width: 780px) 100vw, 50vw"/></div></div></div></section>
    <section className="trust-strip dark" aria-label="Diferenciais rápidos da Soltex"><div className="wrap trust-grid">{[
      ['Atendimento regional', 'Presença próxima para cidade, campo e comércio.'],
      ['Projeto sob medida', 'Dimensionamento pensado para o seu consumo real.'],
      ['Homologação acompanhada', 'A Soltex orienta a etapa com a concessionária.'],
      ['Do orçamento à ligação', 'Uma equipe conduz o processo até a energia gerar.']
    ].map(([title, copy]) => <div key={title}><strong>{title}</strong><span>{copy}</span></div>)}</div></section>
    <section id="sobre" className="section light"><div className="wrap two-col"><Reveal><p className="eyebrow dark-ink"><span/> Sobre a Soltex</p><h2>Energia solar com tecnologia e proximidade</h2><p>A Soltex Energia Solar desenvolve projetos fotovoltaicos para residências, empresas e propriedades rurais em Aurora–CE e região. Entregamos soluções completas, do dimensionamento e projeto à instalação, homologação e suporte.</p><div className="service-areas" aria-label="Sede da Soltex Energia Solar"><span>Aurora · CE</span><span>Centro</span><span>Atendimento regional</span></div><a className="text-link" href="#como-funciona">Conheça o processo <Icon name="arrow-right"/></a></Reveal><Reveal className="about-photo"><Image src="/soltex-projeto-04.jpg" alt="Sistema de energia solar instalado em propriedade rural pela Soltex" fill sizes="(max-width: 800px) 100vw, 50vw"/><div className="about-photo-caption"><span>Energia no campo e na cidade</span><b>Um projeto pensado para a sua realidade.</b></div></Reveal></div></section>
    <section id="soluções" className="section light solutions"><div className="wrap"><Reveal><p className="eyebrow dark-ink"><span/> Soluções</p><h2>Soluções completas em energia solar</h2></Reveal><div className="solution-grid">{solutions.map(([title, copy, icon]) => <Reveal key={title} className="solution-card"><span className="solution-icon"><Icon name={icon as IconName} size={23}/></span><h3>{title}</h3><p>{copy}</p><a href="#simulacao">Saiba mais <Icon name="arrow-right"/></a></Reveal>)}</div></div></section>
    <section id="como-funciona" className="section process dark"><div className="panel-grid" aria-hidden="true"/><div className="wrap"><Reveal><p className="eyebrow"><span/> Como funciona</p><h2>Como funciona a instalação de energia solar</h2></Reveal><ol className="steps">{['Simulação gratuita', 'Projeto e engenharia', 'Instalação', 'Homologação e ligação'].map((step, i) => <Reveal key={step}><li><b>0{i + 1}</b><div><h3>{step}</h3><p>{['Entendemos seu consumo e as condições do imóvel.', 'Desenhamos uma solução adequada à sua necessidade.', 'Executamos a instalação com atenção a cada detalhe.', 'Acompanhamos a burocracia junto à concessionária.'][i]}</p></div></li></Reveal>)}</ol></div></section>
    <section className="section light differentials"><div className="wrap"><Reveal><p className="eyebrow dark-ink"><span/> Por que Soltex</p><h2>Engenharia solar feita para durar</h2></Reveal><div className="differential-grid">{['Engenharia e projeto personalizado', 'Acompanhamento da homologação', 'Equipamentos e garantia conforme proposta', 'Suporte após a instalação'].map((item, i) => <Reveal key={item}><b>0{i + 1}</b><p>{item}</p></Reveal>)}</div></div></section>
    <section id="obras" className="section works"><div className="wrap"><Reveal className="section-heading"><div><p className="eyebrow dark-ink"><span/> Projetos Soltex</p><h2>Instalações reais em diferentes cenários</h2></div><p>Conheça alguns projetos realizados pela Soltex Energia Solar: cidade, comércio e propriedades rurais.</p></Reveal><div className="work-grid">{[
      { src: '/soltex-projeto-01.jpg', alt: 'Sistema de energia solar instalado em telhados urbanos pela Soltex', title: 'Projeto urbano', place: 'Aurora · CE' },
      { src: '/soltex-projeto-02.jpg', alt: 'Painéis solares instalados em uma escola', title: 'Projeto institucional', place: 'Instalação concluída' },
      { src: '/soltex-projeto-03.jpg', alt: 'Sistema fotovoltaico instalado em uma grande propriedade', title: 'Projeto de grande porte', place: 'Sistema fotovoltaico' },
      { src: '/soltex-projeto-04.jpg', alt: 'Painéis solares instalados em residência com piscina', title: 'Energia para sua casa', place: 'Projeto residencial' },
      { src: '/soltex-projeto-05.jpg', alt: 'Usina solar instalada em propriedade rural', title: 'Energia rural', place: 'Propriedade rural' },
      { src: '/soltex-projeto-06.jpg', alt: 'Fileiras de painéis solares em área rural', title: 'Geração no campo', place: 'Projeto concluído' }
    ].map((project) => <article key={project.src} className="work-card"><Image src={project.src} alt={project.alt} fill loading="lazy" sizes="(max-width: 780px) 100vw, 33vw"/><span>{project.title}<b>{project.place}</b></span></article>)}</div></div></section>
    <section id="faq" className="section light faq"><div className="wrap two-col"><Reveal><p className="eyebrow dark-ink"><span/> FAQ</p><h2>Perguntas frequentes sobre energia solar</h2><p>Uma boa decisão começa com informação objetiva. Se a sua dúvida não estiver aqui, fale com um consultor.</p></Reveal><div className="faq-list">{faqs.map(([question, answer], i) => <div className="faq-item" key={question}><button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{question}<span><Icon name={openFaq === i ? 'minus' : 'plus'} size={21}/></span></button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section>
    <section id="simulacao" className="final-cta dark"><div className="panel-grid" aria-hidden="true"/><div className="wrap final-layout"><Reveal><p className="eyebrow"><span/> Simulação gratuita</p><h2>Solicite sua simulação de energia solar</h2><p>Informe sua cidade e o valor médio da conta. A equipe Soltex avalia seu perfil e apresenta os próximos passos.</p></Reveal><Reveal><SimulationForm /></Reveal></div></section>
      <footer className="footer"><div className="wrap footer-top"><a className="brand" href="#inicio"><Image src="/soltex-logo.png" alt="Soltex Energia Solar" width={150} height={110}/></a><div><b>Sede cadastral</b><p>Rua General Sampaio, 40<br/>Centro · Aurora–CE · CEP 63360-000</p></div><div><b>Contato</b><p><a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><Image src="/whatsapp-icon.png" alt="" width={24} height={24}/> Chamar no WhatsApp</a><br/><a href="tel:+558898347697">88 9834-7697</a></p></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Soltex Energia Solar.</span></div></footer>
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chamar a Soltex Energia Solar no WhatsApp"><Image src="/whatsapp-icon.png" alt="" width={38} height={38}/></a>
  </main>;
}
