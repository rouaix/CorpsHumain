/*!
    Code de Daniel ROUAIX
 */
            function afficher(nom){
                if (nom == 'Tete'){
                    var Texte = 'La tête' + ' :<br /><hr />' +'<img src="./img/Tete.png" width="60" /><br />&nbsp;<br />Et la tête et la tête ... <br/>Alouette gentille alouette ...' + '<hr />Source: Wikipedia'
                }
                if (nom == 'Epaule'){
                    var Texte = 'L\'épaule' + ' :<br /><hr />' +'L\'épaule est la région morphologique se situant à la jonction du tronc avec le membre supérieur. Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain. Elle permet d\'orienter le membre supérieur dans l\'espace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l\'environnement situé à sa portée.' + '<hr />Source: Wikipedia'
                } 
                if (nom == 'Coude'){
                    var Texte = 'Le coude' + ' :<br /><hr />' +'Le coude (ou articulation olécranienne) est la partie du membre supérieur située entre le bras et l\'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou fosse cubitale). C\'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l\'avant-bras. Il unit ainsi trois os entre eux : le radius, l\'ulna (cubitus) et l\'humérus. Elle est la réunion de trois articulations : huméro-ulnaire, huméro-radiale et radio-ulnaire proximale (supérieure). Lorsque l\'avant-bras est tendu (extension complète), le bras et l\'avant-bras ne sont pas alignés dans le plan frontal. Les deux parties forment un angle ouvert en dehors, d\'environ 170° chez l\'homme, 160° chez la femme; c\'est ce qui est appelé le valgus physiologique.' + '<hr />Source: Wikipedia'
                }
                if (nom == 'Poignet'){
                    var Texte = 'Le poignet' + ' :<br /><hr />' +'Le poignet est une région du membre supérieur située entre la main et l\'avant-bras, et contenant le carpe. Élément-clé pour le fonctionnement de la main, il permet les mouvements (c\'est-à-dire les changements de place et d’orientation) de la main par rapport à l’avant-bras, transmet les forces appliquées de la main à l’avant-bras, permet d\'adapter la capacité de flexion-extension maximale des doigts et de la préhension.' + '<hr />Source: Wikipedia'
                }   
                if (nom == 'Hanche'){
                    var Texte = 'La hanche' + ' :<br /><hr />' +'La hanche ou articulation coxo-fémorale est une articulation (énarthrose) qui permet de joindre la cuisse au bassin. Elle met en jeu deux os: l\'os iliaque et le fémur.' + '<hr />Source: Wikipedia'
                }                
                if (nom == 'Genou'){
                    var Texte = 'Le genou' + ' :<br /><hr />' +'Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l\'articulation fémoro-patellaire et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des mouvements du genou. Le tissu élastique fin, le cartilage, protège l\'os et fait en sorte que les surfaces de l\'articulation glissent facilement les unes contre les autres. Le genou renferme deux types de cartilages articulaires: le cartilage fibreux (ménisque) et le cartilage hyalin. Le cartilage s\'use non seulement au fil des ans, mais aussi en fonction de son utilisation. Le cartilage possède en outre une capacité de régénération limitée. La faible capacité de régénération du cartilage s\'explique par l\'absence de vaisseaux sanguins qui permettent un métabolisme important.' + '<hr />Source: Wikipedia'
                }
                if (nom == 'Cheville'){
                    var Texte = 'La cheville' + ' :<br /><hr />' +'La cheville ou cou-de-pied est l\'articulation qui relie la jambe et le pied. Elle est parfois sujette à des entorses, le plus souvent externes par flexion plantaire et pied en équin. Une cheville adulte est composée, au point de vue osseux, de l\'épiphyse inférieure du tibia (malléole interne et plafond), de l\'épiphyse inférieure de la fibula (ou péroné) (malléole externe) et du talus (ou astragale). Classiquement, on parle d\'articulation supinale de l\'arrière pied. On peut la définir comme une articulation synoviale de type ginglyme (anciennement trochléenne) c\'est-à-dire mettant en rapport un segment de poulie plein à un segment de poulie creux.' + '<hr />Source: Wikipedia'
                }
                document.getElementById('Infos').innerHTML = "";
                document.getElementById('Infos').style.height = "0%";
                document.getElementById('Infos').style.display = "hidden";
              
                document.getElementById('Informations').style.height = "100%";
                document.getElementById('Informations').style.display = "block";
                document.getElementById('Informations').innerHTML = Texte;
            }
            
            function masquer(){
                document.getElementById('Informations').innerHTML = "";
                document.getElementById('Informations').style.height = "0%";
                document.getElementById('Informations').style.display = "hidden";
            }
            
            function maintenir(nom){
                if (nom == 'Tete'){
                    var Texte = 'La tête' + ' :<br /><hr />' +'<img src="./img/Tete.png" width="60" /><br />&nbsp;<br />Et la tête et la tête ... <br/>Alouette gentille alouette ...' + '<hr />Source: Wikipedia'
                }
                if (nom == 'Epaule'){
                    var Texte = 'L\'épaule' + ' :<br /><hr />' +'L\'épaule est la région morphologique se situant à la jonction du tronc avec le membre supérieur. Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain. Elle permet d\'orienter le membre supérieur dans l\'espace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l\'environnement situé à sa portée.' + '<hr />Source: Wikipedia'
                } 
                if (nom == 'Coude'){
                    var Texte = 'Le coude' + ' :<br /><hr />' +'Le coude (ou articulation olécranienne) est la partie du membre supérieur située entre le bras et l\'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou fosse cubitale). C\'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l\'avant-bras. Il unit ainsi trois os entre eux : le radius, l\'ulna (cubitus) et l\'humérus. Elle est la réunion de trois articulations : huméro-ulnaire, huméro-radiale et radio-ulnaire proximale (supérieure). Lorsque l\'avant-bras est tendu (extension complète), le bras et l\'avant-bras ne sont pas alignés dans le plan frontal. Les deux parties forment un angle ouvert en dehors, d\'environ 170° chez l\'homme, 160° chez la femme; c\'est ce qui est appelé le valgus physiologique.' + '<hr />Source: Wikipedia'
                }
                if (nom == 'Poignet'){
                    var Texte = 'Le poignet' + ' :<br /><hr />' +'Le poignet est une région du membre supérieur située entre la main et l\'avant-bras, et contenant le carpe. Élément-clé pour le fonctionnement de la main, il permet les mouvements (c\'est-à-dire les changements de place et d’orientation) de la main par rapport à l’avant-bras, transmet les forces appliquées de la main à l’avant-bras, permet d\'adapter la capacité de flexion-extension maximale des doigts et de la préhension.' + '<hr />Source: Wikipedia'
                }   
                if (nom == 'Hanche'){
                    var Texte = 'La hanche' + ' :<br /><hr />' +'La hanche ou articulation coxo-fémorale est une articulation (énarthrose) qui permet de joindre la cuisse au bassin. Elle met en jeu deux os: l\'os iliaque et le fémur.' + '<hr />Source: Wikipedia'
                }                
                if (nom == 'Genou'){
                    var Texte = 'Le genou' + ' :<br /><hr />' +'Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l\'articulation fémoro-patellaire et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des mouvements du genou. Le tissu élastique fin, le cartilage, protège l\'os et fait en sorte que les surfaces de l\'articulation glissent facilement les unes contre les autres. Le genou renferme deux types de cartilages articulaires: le cartilage fibreux (ménisque) et le cartilage hyalin. Le cartilage s\'use non seulement au fil des ans, mais aussi en fonction de son utilisation. Le cartilage possède en outre une capacité de régénération limitée. La faible capacité de régénération du cartilage s\'explique par l\'absence de vaisseaux sanguins qui permettent un métabolisme important.' + '<hr />Source: Wikipedia'
                }
                if (nom == 'Cheville'){
                    var Texte = 'La cheville' + ' :<br /><hr />' +'La cheville ou cou-de-pied est l\'articulation qui relie la jambe et le pied. Elle est parfois sujette à des entorses, le plus souvent externes par flexion plantaire et pied en équin. Une cheville adulte est composée, au point de vue osseux, de l\'épiphyse inférieure du tibia (malléole interne et plafond), de l\'épiphyse inférieure de la fibula (ou péroné) (malléole externe) et du talus (ou astragale). Classiquement, on parle d\'articulation supinale de l\'arrière pied. On peut la définir comme une articulation synoviale de type ginglyme (anciennement trochléenne) c\'est-à-dire mettant en rapport un segment de poulie plein à un segment de poulie creux.' + '<hr />Source: Wikipedia'
                }                
                document.getElementById('Informations').innerHTML = "";
                document.getElementById('Informations').style.height = "0%";
                document.getElementById('Informations').style.display = "hidden";
                
                
                document.getElementById('Infos').style.height = "100%";
                document.getElementById('Infos').style.display = "block" ;
                document.getElementById('Infos').innerHTML = Texte;
            }            
           