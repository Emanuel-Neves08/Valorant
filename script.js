 const agentsData = {
            jett: {
                name: "Jett",
                role: "DUELISTA",
                description: "Representando a Coreia do Sul, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos que outros não podem. Ela corre pelos campos de batalha cortando os inimigos antes que eles saibam o que os atingiu.",
                abilities: [
                    { name: "Rajada Ascendente", description: "ATIVE instantaneamente para impulsionar Jett no ar." },
                    { name: "Corrente de Ar", description: "ATIVE para preparar uma rajada de vento. REATIVE o vento para impulsionar Jett na direção em que ela está se movendo." },
                    { name: "Nuvem Turva", description: "ATIVE para lançar instantaneamente um projétil que se expande numa nuvem turva breve que bloqueia a visão." },
                    { name: "Tormenta de Aço", description: "ATIVE para equipar um conjunto de kunais altamente precisas e letais. ATIVE novamente para atirar uma única kunai." }
                ]
            },
            omen: {
                name: "Omen",
                role: "CONTROLADOR",
                description: "Omen é um fantasma de uma memória, que caça nas sombras. Ele cega os inimigos, teleporta pelo campo de batalha e deixa a paranoia assumir o controle enquanto o inimigo tenta descobrir onde ele atacará na próxima.",
                abilities: [
                    { name: "Manto Sombrio", description: "ATIVE para equipar um orbe sombrio e ver o indicador de alcance. ATIVE para lançar o orbe sombrio no local marcado, criando uma sombra duradoura." },
                    { name: "Paranoia", description: "ATIVE instantaneamente para emitir um projétil sombrio adiante, reduzindo brevemente o alcance de visão de todos os jogadores tocados." },
                    { name: "Passos Tenebrosos", description: "ATIVE para começar a se teleportar para o local marcado. Enquanto se teleporta, Omen aparecerá como uma Sombra que pode ser destruída por inimigos para cancelar o teleporte." },
                    { name: "Salto das Sombras", description: "ATIVE para começar a se teleportar para o local marcado. Quando terminar, Omen aparecerá brevemente como uma Sombra." }
                ]
            },
            sova: {
                name: "Sova",
                role: "INICIADOR",
                description: "Nascido do eterno inverno da tundra russa, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades de reconhecimento inigualáveis fazem com que seja impossível se esconder dele.",
                abilities: [
                    { name: "Flecha Rastreadora", description: "EQUIPE um arco com flecha rastreadora. ATIVE para atirar a flecha rastreadora que ativa ao aterrissar, revelando a localização dos inimigos próximos." },
                    { name: "Drone Coruja", description: "EQUIPE um drone coruja. ATIVE para controlá-lo e voar pelo campo de batalha. Enquanto controla o drone, ATIVE para atirar um dardo marcador." },
                    { name: "Flecha de Choque", description: "EQUIPE um arco com flecha de choque. ATIVE para atirar uma flecha explosiva que causa dano aos jogadores próximos." },
                    { name: "Fúria do Caçador", description: "EQUIPE um arco com três projéteis de energia longa distância que atravessam paredes. ATIVE para atirar um projétil de energia que causa dano e revela a localização dos inimigos atingidos." }
                ]
            },
            sage: {
                name: "Sage",
                role: "SENTINELA",
                description: "Como uma verdadeira fortaleza, Sage traz segurança para si mesma e para sua equipe aonde quer que vá. Capaz de reviver aliados caídos e rechaçar investidas agressivas, ela oferece proteção e recuperação contra danos.",
                abilities: [
                    { name: "Orbe de Lentidão", description: "EQUIPE um orbe de lentidão. ATIVE para lançar o orbe adiante, que detona ao pousar, criando um campo duradouro que desacelera os jogadores." },
                    { name: "Orbe de Cura", description: "EQUIPE um orbe de cura. ATIVE enquanto mira em um aliado ferido para ativar uma cura lenta. ALT FIRE enquanto mira em si mesma para se curar." },
                    { name: "Orbe Prisão", description: "EQUIPE um orbe prisão. ATIVE para lançá-lo. Após um longo período de ativação, cria uma zona que desacelera inimigos presos no campo." },
                    { name: "Ressurreição", description: "EQUIPE uma habilidade de ressurreição. ATIVE enquanto mira no corpo de um aliado morto para começar a revivê-lo." }
                ]
            },
            phoenix: {
                name: "Phoenix",
                role: "DUELISTA",
                description: "Vindo do Reino Unido, o poder estelar de Phoenix brilha através de seu estilo de luta, incendiando o campo de batalha com flash e flares. Não importa se tem apoio ou não, ele entra na luta do seu jeito.",
                abilities: [
                    { name: "Labareda", description: "EQUIPE um orbe flamejante. ATIVE para lançar o orbe que detona após um tempo ou ao atingir o chão, criando uma zona duradoura de fogo." },
                    { name: "Bola Curva", description: "EQUIPE um orbe flamejante. ATIVE para lançar o orbe que detona após um tempo, cegando brevemente todos os jogadores que olham para ele." },
                    { name: "Mãos Quentes", description: "EQUIPE uma parede de fogo. ATIVE para criar uma linha de chamas que avança, criando uma parede de fogo que bloqueia a visão e causa dano." },
                    { name: "Renascimento", description: "ATIVE para marcar sua localização atual. Enquanto esta habilidade estiver ativa, morrer ou deixar o tempo acabar fará com que Phoenix renasça na localização marcada." }
                ]
            },
            viper: {
                name: "Viper",
                role: "CONTROLADOR",
                description: "A química é a melhor arma de Viper, uma especialista americana em guerra química que usa uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo.",
                abilities: [
                    { name: "Nuvem Venenosa", description: "EQUIPE um lançador de gás venenoso. ATIVE para lançar o canister que se ativa ao aterrissar. REATIVE para criar uma nuvem de gás tóxico." },
                    { name: "Cortina Tóxica", description: "EQUIPE um lançador de cortina tóxica. ATIVE para lançar o canister que se ativa ao aterrissar. REATIVE para criar uma parede alta e longa de gás tóxico." },
                    { name: "Veneno de Cobra", description: "EQUIPE um lançador químico. ATIVE para lançar um canister que se quebra ao atingir o chão, criando uma zona química duradoura que causa dano." },
                    { name: "Fosso de Víboras", description: "EQUIPE um pulverizador químico. ATIVE para pulverizar uma nuvem química em todas as direções ao redor de Viper, criando uma grande nuvem que reduz o alcance de visão." }
                ]
            }
        };

        // Smooth scrolling
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Navbar links smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Modal functions
        function openAgentModal(agentId) {
            const agent = agentsData[agentId];
            if (!agent) return;

            document.getElementById('modalName').textContent = agent.name;
            document.getElementById('modalRole').textContent = agent.role;
            document.getElementById('modalDescription').textContent = agent.description;

            // Render abilities
            const abilitiesContainer = document.getElementById('modalAbilities');
            abilitiesContainer.innerHTML = '';
            agent.abilities.forEach(ability => {
                const abilityDiv = document.createElement('div');
                abilityDiv.className = 'ability';
                abilityDiv.innerHTML = `
                    <h4>${ability.name}</h4>
                    <p>${ability.description}</p>
                `;
                abilitiesContainer.appendChild(abilityDiv);
            });

            // Show modal
            document.getElementById('agentModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeAgentModal() {
            document.getElementById('agentModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        document.getElementById('agentModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeAgentModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeAgentModal();
            }
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

 
        document.querySelectorAll('.card, .animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

     
        document.querySelectorAll('.cards-grid').forEach(grid => {
            const cards = grid.querySelectorAll('.card');
            cards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.1}s`;
            });
        });

        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            }
        });

     
        window.addEventListener('scroll', () => {
            const hero = document.querySelector('.hero');
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        });

        // Add hover sound effects (visual feedback)
        document.querySelectorAll('.card, .btn').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform += ' scale(1.02)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = element.style.transform.replace(' scale(1.02)', '');
            });
        });

      
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

       
        function addAgentImage(agentName, imageUrl) {
            const agentCards = document.querySelectorAll('.agent-card');
            agentCards.forEach(card => {
                const title = card.querySelector('h3');
                if (title && title.textContent.toLowerCase() === agentName.toLowerCase()) {
                    const agentImage = card.querySelector('.agent-image');
                    agentImage.style.backgroundImage = `url(${imageUrl})`;
                    agentImage.removeAttribute('data-placeholder');
                }
            });
        }
