import re

with open('/Users/murilohenriquemoreiravaz/.gemini/antigravity/scratch/pagina-de-vendas-viralpulse/index.html', 'r') as f:
    content = f.read()

# Replace general text
content = content.replace('ao Ennvo', 'ao ViralPulse')

# Mensal replacements
content = content.replace('Acesso ilimitado ao Inventário por 1 mês', 'Acesso completo a Produtos e Vídeos Virais por 1 mês')
content = content.replace('Acesso ilimitado a Influencers por 1 mês', 'Acesso à Galeria de Avatares e UGC do Criador por 1 mês')
content = content.replace('Acesso ilimitado ao Swap AI por 1 mês', 'Acesso ao Builder e sistema de Trocas por 1 mês')
content = content.replace('Acesso ilimitado ao Editor por 1 mês', 'Acesso a Ambientes e Movimentos por 1 mês')
content = content.replace('Acesso ilimitado ao Ennvo Hub por 1 mês', 'Acesso ao gerador de Headline e Editor por 1 mês')
content = content.replace('Acesso ilimitado ao Ennvo Academy por 1 mês', 'Acesso ilimitado ao Viralize AI por 1 mês')

# Vitalicio replacements (same prefix but without " por 1 mês" and with some variations)
# Wait, my previous cards had EXACTLY these texts for Vitalicio:
# "Acesso ilimitado ao Inventário"
# "Acesso ilimitado a Influencers"
# "Acesso ilimitado ao Swap AI"
# "Acesso ilimitado ao Editor"
# "Acesso ilimitado ao Ennvo Hub"
# "Acesso ilimitado ao Ennvo Academy"

content = content.replace('Acesso ilimitado ao Inventário<', 'Acesso completo a Produtos e Vídeos Virais<')
content = content.replace('Acesso ilimitado a Influencers<', 'Acesso à Galeria de Avatares e UGC do Criador<')
content = content.replace('Acesso ilimitado ao Swap AI<', 'Acesso ao Builder e sistema de Trocas<')
content = content.replace('Acesso ilimitado ao Editor<', 'Acesso a Ambientes e Movimentos<')
content = content.replace('Acesso ilimitado ao Ennvo Hub<', 'Acesso ao gerador de Headline e Editor<')
content = content.replace('Acesso ilimitado ao Ennvo Academy<', 'Acesso ilimitado ao Viralize AI<')

with open('/Users/murilohenriquemoreiravaz/.gemini/antigravity/scratch/pagina-de-vendas-viralpulse/index.html', 'w') as f:
    f.write(content)

