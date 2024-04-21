# Roteiro
- O que sao
- Aplicacao Monolitiva x Microservicos
- Caracteristcas
- Cuidados ao utilizar
- Case studies
- Exemplos de aplicacoes
- Deployment strategies

# O que sao microservicoes?
- "Microservices is an architecture style, in which large complex software applications are composed of one or more services. Micro service can be deployed independently of one another and are loosely coupled. Each of these microservices fosuses on completing one task only and does that one task really well. In all cases, that one task represents a small business capability." - Martin Fowler
> Definicao bastante similar a um servico de SOA. Em breve discutiremos as diferencas.
- “In short, the microservice architectural style is an approach to
developing a single application as a suite of small services, each
running in its own process and communicating with lightweight
mechanisms, often an HTTP resource API. These services are built
around business capabilities and independently deployable by fully
automated deployment machinery. There is a bare minimum of
centralized management of these services, which may be written
in different programming languages and use different data storage
technologies.”
- https://martinfowler.com/articles/microservices.html
- https://microservices.io/
- https://www.nginx.com/blog/introduction-to-microservices/
- https://www.nginx.com/blog/microservices-at-netflix-architectural-best-practices/

# Microservices vs SOA
> Em geral, microservicos nao precisam ser descobertos em tempo de execucao e nao precisam de mediacao.
> Principais diferencas:
> Ambicao e Foco
> - SOA: Ambicao de reutilizacao de servicos
> - Microservicos: Foco em desacoplamento e independencia
> Microservico -> Menos custoso. Transformacao mais incremental e experimental.
>

# Caracteris