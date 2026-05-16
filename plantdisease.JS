
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.querySelector(`nav a[onclick="showSection('${sectionId}')"]`).classList.add('active');
  if(sectionId === 'detectSection') document.getElementById('resultBox').style.display = 'none';
}
const plantDiseases = [
  { plant: 'Tomato', disease: 'Early Blight', symptoms: 'Dark concentric spots on lower leaves', treatment: 'Apply fungicide containing chlorothalonil' },
  { plant: 'Rice', disease: 'Blast', symptoms: 'Diamond-shaped lesions on leaves', treatment: 'Apply tricyclazole and manage field humidity' },
  { plant: 'Cotton', disease: 'Leaf Curl', symptoms: 'Leaves curl and become distorted', treatment: 'Control vector insects and remove diseased plants' },
  { plant: 'Tomato', disease: 'Early Blight', symptoms: 'Dark concentric spots on lower leaves', treatment: 'Apply fungicide containing chlorothalonil' },
  { plant: 'Tomato', disease: 'Late Blight', symptoms: 'Water-soaked lesions on leaves and fruit', treatment: 'Use copper-based fungicides and remove infected plants' },
  { plant: 'Potato', disease: 'Blackleg', symptoms: 'Black decay at base of stem', treatment: 'Use certified seed and avoid overwatering' },
  { plant: 'Potato', disease: 'Late Blight', symptoms: 'Brown spots on leaves with white mold on undersides', treatment: 'Apply fungicides and destroy infected plants' },
  { plant: 'Wheat', disease: 'Rust', symptoms: 'Orange-brown pustules on leaves and stems', treatment: 'Grow resistant varieties and apply fungicides' },
  { plant: 'Wheat', disease: 'Powdery Mildew', symptoms: 'White powdery growth on leaves', treatment: 'Use sulfur-based fungicide and resistant varieties' },
  { plant: 'Rice', disease: 'Blast', symptoms: 'Diamond-shaped lesions on leaves', treatment: 'Apply tricyclazole and manage field humidity' },
  { plant: 'Rice', disease: 'Bacterial Leaf Blight', symptoms: 'Yellowing and wilting of leaves', treatment: 'Use resistant varieties and avoid high nitrogen' },
  { plant: 'Mango', disease: 'Anthracnose', symptoms: 'Black spots on leaves, flowers, and fruit', treatment: 'Apply copper-based fungicides' },
  { plant: 'Mango', disease: 'Powdery Mildew', symptoms: 'White fungal growth on flowers and leaves', treatment: 'Use sulfur or systemic fungicide' },
  { plant: 'Apple', disease: 'Apple Scab', symptoms: 'Olive-green spots on leaves and fruits', treatment: 'Apply fungicide during early season' },
  { plant: 'Apple', disease: 'Fire Blight', symptoms: 'Blackened shoots and branches that look scorched', treatment: 'Prune infected parts and use antibiotics like streptomycin' },
  { plant: 'Banana', disease: 'Panama Disease', symptoms: 'Yellowing and wilting of lower leaves', treatment: 'Use resistant cultivars and avoid infected soil' },
  { plant: 'Banana', disease: 'Black Sigatoka', symptoms: 'Dark streaks on leaves that turn necrotic', treatment: 'Use fungicides and improve drainage' },
  { plant: 'Citrus', disease: 'Citrus Canker', symptoms: 'Raised corky lesions on leaves and fruit', treatment: 'Remove infected trees and apply copper sprays' },
  { plant: 'Citrus', disease: 'Greening (HLB)', symptoms: 'Yellow mottling of leaves and misshapen fruits', treatment: 'Control psyllid vectors and remove infected trees' },
  { plant: 'Grapevine', disease: 'Downy Mildew', symptoms: 'Yellow oil spots on upper leaf surface, white mold on underside', treatment: 'Apply systemic fungicide like metalaxyl' },
  { plant: 'Grapevine', disease: 'Powdery Mildew', symptoms: 'White powder on leaves and grapes', treatment: 'Use sulfur sprays and improve air circulation' },
  { plant: 'Pepper', disease: 'Bacterial Leaf Spot', symptoms: 'Water-soaked spots on leaves turning brown', treatment: 'Use copper-based bactericides and resistant seeds' },
  { plant: 'Pepper', disease: 'Phytophthora Blight', symptoms: 'Wilting, root rot, and fruit collapse', treatment: 'Improve drainage and apply fungicide' },
  { plant: 'Cabbage', disease: 'Black Rot', symptoms: 'Yellowing V-shaped lesions on leaf edges', treatment: 'Use disease-free seed and crop rotation' },
  { plant: 'Cabbage', disease: 'Clubroot', symptoms: 'Swollen, distorted roots', treatment: 'Raise soil pH with lime and rotate crops' },
  { plant: 'Carrot', disease: 'Alternaria Leaf Blight', symptoms: 'Dark brown leaf spots with yellow margins', treatment: 'Apply fungicides like azoxystrobin' },
  { plant: 'Carrot', disease: 'Cavity Spot', symptoms: 'Small sunken lesions on roots', treatment: 'Improve drainage and avoid over-irrigation' },
  { plant: 'Strawberry', disease: 'Gray Mold (Botrytis)', symptoms: 'Gray fuzzy mold on fruit', treatment: 'Use fungicides and remove infected fruit' },
  { plant: 'Strawberry', disease: 'Leaf Spot', symptoms: 'Purple spots with white centers on leaves', treatment: 'Apply fungicide and improve airflow' },
  { plant: 'Onion', disease: 'Downy Mildew', symptoms: 'Grayish mold on leaves, leaf collapse', treatment: 'Apply fungicides and avoid overhead watering' },
  { plant: 'Onion', disease: 'Purple Blotch', symptoms: 'Purple elongated lesions on leaves', treatment: 'Use fungicide sprays and ensure good spacing' },
  { plant: 'Corn', disease: 'Northern Corn Leaf Blight', symptoms: 'Cigar-shaped gray lesions on leaves', treatment: 'Use resistant varieties and rotate crops' },
  { plant: 'Corn', disease: 'Common Rust', symptoms: 'Reddish-brown pustules on leaves', treatment: 'Fungicide application if severe' },
  { plant: 'Soybean', disease: 'Soybean Rust', symptoms: 'Small tan to reddish-brown pustules on leaves', treatment: 'Apply triazole fungicides' },
  { plant: 'Soybean', disease: 'Frogeye Leaf Spot', symptoms: 'Circular gray spots with dark margins', treatment: 'Use resistant varieties and fungicides' },
  { plant: 'Peach', disease: 'Peach Leaf Curl', symptoms: 'Leaves curl, thicken, and turn red', treatment: 'Apply fungicide in dormant season' },
  { plant: 'Peach', disease: 'Brown Rot', symptoms: 'Blossom blight and fruit rot with brown spores', treatment: 'Remove mummified fruit and apply fungicide' },
  { plant: 'Lettuce', disease: 'Bottom Rot', symptoms: 'Brown rotting at base of plant', treatment: 'Improve soil drainage and rotate crops' },
  { plant: 'Lettuce', disease: 'Downy Mildew', symptoms: 'Yellow angular leaf spots with gray mold underneath', treatment: 'Use resistant varieties and fungicides' },
  { plant: 'Pineapple', disease: 'Heart Rot', symptoms: 'Central leaves rot and collapse', treatment: 'Avoid overhead watering and use fungicides' },
  { plant: 'Pineapple', disease: 'Marbling', symptoms: 'Fruit flesh shows darkened streaks', treatment: 'Control insect vectors and use clean planting material' },
  { plant: 'Papaya', disease: 'Papaya Ringspot Virus', symptoms: 'Yellow mosaic and ring spots on fruit', treatment: 'Remove infected plants and control aphids' },
  { plant: 'Papaya', disease: 'Anthracnose', symptoms: 'Sunken black lesions on fruit', treatment: 'Apply copper-based fungicides' },
  { plant: 'Tea', disease: 'Blister Blight', symptoms: 'Water-soaked leaf blisters that turn brown', treatment: 'Spray systemic fungicides like hexaconazole' },
  { plant: 'Tea', disease: 'Red Rust', symptoms: 'Orange-red patches on leaves', treatment: 'Apply copper oxychloride and manage shade' },
  { plant: 'Coffee', disease: 'Coffee Leaf Rust', symptoms: 'Yellow spots on leaves with orange spore masses', treatment: 'Use resistant varieties and fungicides' },
  { plant: 'Coffee', disease: 'Berry Disease', symptoms: 'Blackening of coffee cherries', treatment: 'Spray copper fungicides and prune plants' },
  { plant: 'Chili', disease: 'Anthracnose', symptoms: 'Sunken lesions on fruit with pink spores', treatment: 'Apply mancozeb or carbendazim' },
  { plant: 'Chili', disease: 'Wilt (Fusarium)', symptoms: 'Sudden wilting of entire plant', treatment: 'Use resistant varieties and soil solarization' },
  { plant: 'Okra', disease: 'Yellow Vein Mosaic', symptoms: 'Yellowing veins and leaf distortion', treatment: 'Control whiteflies and remove infected plants' },
  { plant: 'Okra', disease: 'Powdery Mildew', symptoms: 'White powder on leaves and stems', treatment: 'Use sulfur-based fungicides' },
  { plant: 'Potato', disease: 'Early Blight', symptoms: 'Dark concentric rings on older leaves', treatment: 'Apply mancozeb or chlorothalonil' },
  { plant: 'Wheat', disease: 'Leaf Rust', symptoms: 'Small orange pustules on leaf surface', treatment: 'Use resistant varieties and fungicide spray' },
  { plant: 'Rice', disease: 'Brown Spot', symptoms: 'Brown lesions with gray centers on leaves', treatment: 'Apply fungicide and balance soil nutrition' },
  { plant: 'Mango', disease: 'Leaf Spot', symptoms: 'Small black or brown spots on leaves', treatment: 'Apply copper oxychloride spray' },
  { plant: 'Apple', disease: 'Frogeye Leaf Spot', symptoms: 'Small round purple spots on leaves', treatment: 'Apply captan-based fungicide' },
  { plant: 'Peach', disease: 'Bacterial Spot', symptoms: 'Water-soaked spots on leaves turning black', treatment: 'Use copper-based bactericides' },
  { plant: 'Pear', disease: 'Pear Scab', symptoms: 'Velvety dark spots on leaves and young shoots', treatment: 'Spray with fungicides during early growth' },
  { plant: 'Strawberry', disease: 'Angular Leaf Spot', symptoms: 'Water-soaked angular spots on underside of leaves', treatment: 'Avoid overhead irrigation and use resistant varieties' },
  { plant: 'Lettuce', disease: 'Bacterial Leaf Spot', symptoms: 'Dark, greasy spots on leaves', treatment: 'Use pathogen-free seeds and copper sprays' },
  { plant: 'Spinach', disease: 'White Rust', symptoms: 'Yellow patches on leaves with white pustules underneath', treatment: 'Remove infected plants and apply fungicide' },
  { plant: 'Carrot', disease: 'Leaf Blight', symptoms: 'Irregular brown spots on leaf tips and margins', treatment: 'Use resistant cultivars and apply fungicide' },
  { plant: 'Corn', disease: 'Southern Leaf Blight', symptoms: 'Tan lesions with dark borders on leaves', treatment: 'Rotate crops and use resistant varieties' },
  { plant: 'Soybean', disease: 'Bacterial Blight', symptoms: 'Water-soaked lesions on leaf margins', treatment: 'Plant resistant varieties and rotate crops' },
  { plant: 'Cabbage', disease: 'Downy Mildew', symptoms: 'Yellow patches on top of leaves with gray mold underneath', treatment: 'Use fungicides and avoid overcrowding' },
  { plant: 'Cauliflower', disease: 'Alternaria Leaf Spot', symptoms: 'Dark leaf spots with concentric rings', treatment: 'Apply protective fungicides early' },
  { plant: 'Broccoli', disease: 'Black Rot', symptoms: 'Yellowing V-shaped lesions at leaf margins', treatment: 'Use hot-water-treated seeds and rotate crops' },
  { plant: 'Cucumber', disease: 'Angular Leaf Spot', symptoms: 'Angular water-soaked spots that turn necrotic', treatment: 'Avoid wet foliage and apply copper fungicides' },
  { plant: 'Pumpkin', disease: 'Powdery Mildew', symptoms: 'White powdery growth on upper leaf surfaces', treatment: 'Use sulfur sprays and resistant varieties' },
  { plant: 'Zucchini', disease: 'Yellow Leaf Curl', symptoms: 'Leaves curl, yellow, and become stunted', treatment: 'Control whiteflies and remove infected plants' },
  { plant: 'Okra', disease: 'Leaf Curl Virus', symptoms: 'Leaves curl and become distorted', treatment: 'Control vector insects and remove diseased plants' },
  { plant: 'Beet', disease: 'Cercospora Leaf Spot', symptoms: 'Round spots with tan centers and red borders', treatment: 'Apply fungicides like azoxystrobin' },
  { plant: 'Sweet Potato', disease: 'Leaf Spot', symptoms: 'Circular or irregular brown lesions on leaves', treatment: 'Use disease-free cuttings and fungicides' },
  { plant: 'Cassava', disease: 'Cassava Mosaic Disease', symptoms: 'Mottling and distortion of leaves', treatment: 'Use resistant varieties and control whiteflies' },
  { plant: 'Grapevine', disease: 'Anthracnose', symptoms: 'Irregular brown or gray spots on leaves', treatment: 'Apply systemic fungicide and prune affected areas' },
  { plant: 'Chili', disease: 'Leaf Curl Virus', symptoms: 'Upward curling of leaves with puckering', treatment: 'Use neem oil or systemic insecticides' },
  { plant: 'Brinjal', disease: 'Little Leaf Disease', symptoms: 'Leaves remain small and yellow', treatment: 'Control leafhopper vectors and remove infected plants' },
  { plant: 'Guava', disease: 'Algal Leaf Spot', symptoms: 'Greenish gray circular spots on leaves', treatment: 'Apply Bordeaux mixture' },
  { plant: 'Tea', disease: 'Leaf Blister', symptoms: 'Raised blisters on young leaves', treatment: 'Apply contact fungicides' },
  { plant: 'Coffee', disease: 'Leaf Scorch', symptoms: 'Leaf margins turn brown and dry', treatment: 'Ensure proper irrigation and balanced nutrients' },
  { plant: 'Tobacco', disease: 'Tobacco Mosaic Virus', symptoms: 'Mosaic mottling and curling of leaves', treatment: 'Remove infected plants and disinfect tools' },
  { plant: 'Sunflower', disease: 'Rust', symptoms: 'Rusty pustules on underside of leaves', treatment: 'Apply triazole fungicides and rotate crops' },
  { plant: 'Sorghum', disease: 'Gray Leaf Spot', symptoms: 'Elongated gray lesions on leaves', treatment: 'Use resistant hybrids and fungicide sprays' },
  { plant: 'Barley', disease: 'Net Blotch', symptoms: 'Dark brown streaks forming net-like pattern', treatment: 'Apply foliar fungicides and rotate crops' },
  { plant: 'Millet', disease: 'Leaf Spot', symptoms: 'Dark brown circular spots on leaves', treatment: 'Use disease-free seeds and apply fungicide' },
  { plant: 'Mustard', disease: 'White Rust', symptoms: 'White blister-like growths on leaf undersides', treatment: 'Use resistant varieties and fungicide sprays' },
  { plant: 'Cotton', disease: 'Alternaria Leaf Spot', symptoms: 'Brown concentric lesions on older leaves', treatment: 'Spray with chlorothalonil or mancozeb' },
  { plant: 'Jute', disease: 'Anthracnose', symptoms: 'Brown spots and leaf blight', treatment: 'Use seed treatment and foliar fungicides' },
  { plant: 'Pigeon Pea', disease: 'Phytophthora Leaf Blight', symptoms: 'Water-soaked lesions that enlarge rapidly', treatment: 'Improve drainage and apply fungicide' },
  { plant: 'Cowpea', disease: 'Leaf Spot', symptoms: 'Small dark spots on leaves, often coalescing', treatment: 'Use fungicides and rotate crops' },
  { plant: 'Fenugreek', disease: 'Powdery Mildew', symptoms: 'White growth on upper leaf surface', treatment: 'Spray with sulfur-based fungicides' },
  { plant: 'Coriander', disease: 'Stem Gall', symptoms: 'Swelling at leaf bases and stems', treatment: 'Use disease-free seeds and crop rotation' },
  { plant: 'Mint', disease: 'Rust', symptoms: 'Orange pustules on underside of leaves', treatment: 'Remove infected leaves and apply fungicide' },
  { plant: 'Basil', disease: 'Downy Mildew', symptoms: 'Yellowing and fuzzy growth on underside of leaves', treatment: 'Improve air circulation and apply fungicides' },
  { plant: 'Parsley', disease: 'Leaf Spot', symptoms: 'Brown irregular spots on leaves', treatment: 'Use copper fungicide and clean seed' },
  { plant: 'Dill', disease: 'Powdery Mildew', symptoms: 'White powder on leaf surfaces', treatment: 'Spray sulfur-based or systemic fungicides' },
  { plant: 'Turmeric', disease: 'Leaf Blotch', symptoms: 'Yellowish spots on leaves that coalesce', treatment: 'Apply mancozeb or carbendazim' },
  { plant: 'Ginger', disease: 'Leaf Spot', symptoms: 'Small brown spots on leaf tips and margins', treatment: 'Use disease-free rhizomes and fungicides' },
  { plant: 'Tomato', disease: 'Bacterial Spot', symptoms: 'Small water-soaked spots on leaves that turn black', treatment: 'Apply copper-based bactericide and remove infected leaves' },
  { plant: 'Potato', disease: 'Leaf Roll Virus', symptoms: 'Upward rolling of leaves and stunted growth', treatment: 'Use virus-free seed and control aphids' },
  { plant: 'Eggplant', disease: 'Cercospora Leaf Spot', symptoms: 'Circular brown lesions with light centers on leaves', treatment: 'Spray with fungicides like mancozeb' },
  { plant: 'Chili', disease: 'Bacterial Leaf Spot', symptoms: 'Dark, greasy spots with yellow halos', treatment: 'Use copper fungicide and certified seed' },
  { plant: 'Cucumber', disease: 'Downy Mildew', symptoms: 'Yellow angular spots with purple mold underneath', treatment: 'Apply systemic fungicide and improve ventilation' },
  { plant: 'Pumpkin', disease: 'Bacterial Leaf Spot', symptoms: 'Dark brown lesions on leaves, sometimes with cracks', treatment: 'Use resistant varieties and copper sprays' },
  { plant: 'Melon', disease: 'Anthracnose', symptoms: 'Yellow and brown spots on leaves that enlarge rapidly', treatment: 'Apply chlorothalonil and remove infected debris' },
  { plant: 'Gourd', disease: 'Powdery Mildew', symptoms: 'White coating on leaves, leading to defoliation', treatment: 'Spray with sulfur or neem oil' },
  { plant: 'Watermelon', disease: 'Gummy Stem Blight', symptoms: 'Leaf spots with brown borders and vine rot', treatment: 'Use certified seeds and fungicides' },
  { plant: 'Peas', disease: 'Ascochyta Leaf Spot', symptoms: 'Irregular brown spots on leaves and stems', treatment: 'Apply protectant fungicide and rotate crops' },
  { plant: 'Beans', disease: 'Common Bacterial Blight', symptoms: 'Water-soaked leaf lesions that turn brown', treatment: 'Use disease-free seed and apply copper sprays' },
  { plant: 'Soybean', disease: 'Downy Mildew', symptoms: 'Pale green to yellow spots with gray fuzz on underside', treatment: 'Use resistant varieties and improve drainage' },
  { plant: 'Alfalfa', disease: 'Spring Black Stem', symptoms: 'Black lesions at base of stem and leaf yellowing', treatment: 'Cut early and rotate crops' },
  { plant: 'Clover', disease: 'Leaf Spot', symptoms: 'Small black spots that coalesce on leaves', treatment: 'Use fungicide sprays and manage moisture' },
  { plant: 'Tobacco', disease: 'Brown Spot', symptoms: 'Small brown leaf lesions with light centers', treatment: 'Apply copper oxychloride or mancozeb' },
  { plant: 'Spinach', disease: 'Cladosporium Leaf Spot', symptoms: 'Olive-brown spots that dry out and crack', treatment: 'Use clean seed and avoid wet foliage' },
  { plant: 'Cabbage', disease: 'Ring Spot', symptoms: 'Dark rings on leaves with yellow halos', treatment: 'Use fungicides and remove debris' },
  { plant: 'Broccoli', disease: 'Downy Mildew', symptoms: 'Yellow blotches with gray mold on underside of leaves', treatment: 'Use resistant cultivars and fungicide' },
  { plant: 'Mustard', disease: 'Alternaria Leaf Spot', symptoms: 'Dark lesions with concentric rings on leaves', treatment: 'Spray with mancozeb or chlorothalonil' },
  { plant: 'Radish', disease: 'Downy Mildew', symptoms: 'Yellowing leaves with fuzzy gray mold underneath', treatment: 'Improve air circulation and apply fungicide' },
  { plant: 'Turnip', disease: 'Cercospora Leaf Spot', symptoms: 'Gray to brown spots with reddish margins', treatment: 'Apply foliar fungicides and rotate crops' },
  { plant: 'Beetroot', disease: 'Leaf Spot', symptoms: 'Tan circular lesions with purple edges', treatment: 'Use certified seed and treat with fungicide' },
  { plant: 'Celery', disease: 'Early Blight', symptoms: 'Small yellow spots that enlarge into brown patches', treatment: 'Use fungicides and ensure good spacing' },
  { plant: 'Parsley', disease: 'Bacterial Blight', symptoms: 'Black streaks and leaf spotting', treatment: 'Use clean seeds and apply copper fungicide' },
  { plant: 'Fennel', disease: 'Rust', symptoms: 'Orange pustules on the underside of leaves', treatment: 'Remove infected leaves and apply fungicide' },
  { plant: 'Basil', disease: 'Fusarium Wilt', symptoms: 'Yellowing and wilting of lower leaves', treatment: 'Use resistant varieties and sterilized soil' },
  { plant: 'Mint', disease: 'Downy Mildew', symptoms: 'Purple mold on undersides and leaf curling', treatment: 'Ensure airflow and apply fungicides' },
  { plant: 'Sage', disease: 'Rust', symptoms: 'Rusty spots on the underside of leaves', treatment: 'Prune infected parts and spray fungicide' },
  { plant: 'Rosemary', disease: 'Leaf Spot', symptoms: 'Small dark spots on leaves causing drop', treatment: 'Avoid overhead watering and use fungicide' },
  { plant: 'Thyme', disease: 'Botrytis Blight', symptoms: 'Brown lesions on leaves in humid conditions', treatment: 'Improve ventilation and remove infected parts' },
  { plant: 'Lavender', disease: 'Septoria Leaf Spot', symptoms: 'Brown or purple spots causing leaf drop', treatment: 'Prune infected areas and use fungicide' },
  { plant: 'Ornamental Kale', disease: 'Leaf Spot', symptoms: 'Dark spots with yellow halos on foliage', treatment: 'Apply copper fungicide and reduce humidity' },
  { plant: 'Marigold', disease: 'Powdery Mildew', symptoms: 'White patches on upper leaf surfaces', treatment: 'Spray with neem oil or sulfur' },
  { plant: 'Petunia', disease: 'Leaf Spot', symptoms: 'Dark brown irregular spots on leaves', treatment: 'Use clean water and apply fungicides' },
  { plant: 'Pansy', disease: 'Cercospora Leaf Spot', symptoms: 'Brown spots on lower leaves that spread', treatment: 'Apply systemic fungicide and avoid wet foliage' },
  { plant: 'Zinnia', disease: 'Alternaria Leaf Spot', symptoms: 'Circular brown leaf spots with yellow margins', treatment: 'Remove infected leaves and apply fungicide' },
  { plant: 'Snapdragon', disease: 'Rust', symptoms: 'Orange pustules on the underside of leaves', treatment: 'Apply fungicide and improve airflow' },
  { plant: 'Geranium', disease: 'Bacterial Blight', symptoms: 'Water-soaked spots on leaves turning brown', treatment: 'Remove infected leaves and disinfect tools' },
  { plant: 'Begonia', disease: 'Leaf Spot', symptoms: 'Brown to black spots with yellow halos', treatment: 'Use copper fungicide and improve drainage' },
  { plant: 'Chrysanthemum', disease: 'Leaf Spot', symptoms: 'Brown leaf spots that coalesce and dry', treatment: 'Apply mancozeb and remove infected leaves' },
  { plant: 'Hydrangea', disease: 'Cercospora Leaf Spot', symptoms: 'Small circular purple spots on leaves', treatment: 'Prune and treat with copper fungicide' },
  { plant: 'Hibiscus', disease: 'Leaf Spot', symptoms: 'Yellowing leaves with dark brown spots', treatment: 'Apply fungicide and maintain good hygiene' },
  { plant: 'Bougainvillea', disease: 'Leaf Spot', symptoms: 'Irregular brown spots on older leaves', treatment: 'Prune and apply contact fungicide' },
  { plant: 'Ixora', disease: 'Leaf Spot', symptoms: 'Dark lesions that expand and cause leaf drop', treatment: 'Improve airflow and apply fungicide' },
  { plant: 'Croton', disease: 'Leaf Blight', symptoms: 'Yellowing leaves with dark, spreading spots', treatment: 'Use copper sprays and prune affected parts' },
  { plant: 'Rubber Plant', disease: 'Fungal Leaf Spot', symptoms: 'Circular dark spots that turn papery', treatment: 'Remove infected leaves and reduce humidity' },
  { plant: 'Money Plant', disease: 'Leaf Spot', symptoms: 'Yellow patches with brown centers on leaves', treatment: 'Spray fungicide and ensure air circulation' },
  { plant: 'Areca Palm', disease: 'Leaf Spot', symptoms: 'Oval, water-soaked spots on palm fronds', treatment: 'Remove infected fronds and apply copper fungicide' },
  { plant: 'Olive', disease: 'Olive Quick Decline Syndrome', symptoms: 'Rapid wilting and dieback of branches, dark cankers on trunk', treatment: 'Remove infected trees; monitor for Xylella vector control' },
{ plant: 'Cherry', disease: 'Cherry Leaf Spot', symptoms: 'Purple spots on leaves, yellowing and early drop', treatment: 'Apply fungicide in spring; remove fallen leaves' },
{ plant: 'Strawberry', disease: 'Red Stele (Phytophthora root rot)', symptoms: 'Red discoloration in roots, wilting foliage', treatment: 'Improve drainage; use tolerant cultivars' },
{ plant: 'Grape', disease: 'Botrytis Bunch Rot', symptoms: 'Gray mold on fruit, browning and shriveling berries', treatment: 'Improve air circulation; apply fungicide before bloom' },
{ plant: 'Cucurbit (cucumber, melon)', disease: 'Downy Mildew', symptoms: 'Yellow angular lesions on leaves with downy growth beneath', treatment: 'Use resistant varieties; apply fungicides; improve airflow' },
{ plant: 'Bean', disease: 'Bean Mosaic Virus', symptoms: 'Mottled yellow leaves, stunted growth', treatment: 'Use virus-free seed; control aphid vectors' },
{ plant: 'Soybean', disease: 'Charcoal Rot', symptoms: 'Stem discoloration, fine black spores inside tissue', treatment: 'Avoid drought stress; rotate crops; maintain soil health' },
{ plant: 'Wheat', disease: 'Fusarium Head Blight (Scab)', symptoms: 'Bleached spikelets; pinkish spore masses on heads', treatment: 'Plant resistant varieties; apply fungicides at flowering' },
{ plant: 'Barley', disease: 'Ergot', symptoms: 'Dark purple sclerotia replacing grains', treatment: 'Use clean seed; rotate cereals; control grasses in field' },
{ plant: 'Rye', disease: 'Ergot', symptoms: 'As above for barley—dark ergot bodies in ears', treatment: 'Same: clean seed, rotation, weed control' },
{ plant: 'Rice', disease: 'False Smut', symptoms: 'Orange spore balls on grains', treatment: 'Apply fungicide; remove volunteer rice' },
{ plant: 'Rice', disease: 'Rice Blast (neck)', symptoms: 'Diamond lesions on panicle neck leading to breaks', treatment: 'Use resistant varieties; balanced fertilization' },
{ plant: 'Tea', disease: 'Grey Blight', symptoms: 'Greyish brown lesions on leaves causing defoliation', treatment: 'Apply fungicide; improve air flow' },
{ plant: 'Groundnut (peanut)', disease: 'Tikka Disease', symptoms: 'Circular leaf spots with yellow border', treatment: 'Use resistant cultivars; apply fungicides' },
{ plant: 'Sugarcane', disease: 'Red Rot', symptoms: 'Internal reddening in stalks, foul smell', treatment: 'Burn trash; plant resistant varieties' },
{ plant: 'Banana', disease: 'Bunchy Top Virus', symptoms: 'Short stunted plant with erect narrow leaves', treatment: 'Use virus-free planting material; control aphids' },
{ plant: 'Avocado', disease: 'Phytophthora Root Rot', symptoms: 'Yellowing leaves, root rot, reduced vigor', treatment: 'Ensure good drainage; use resistant rootstocks' },
{ plant: 'Oak', disease: 'Oak Wilt', symptoms: 'Leaves wilt quickly then discolor; fungal mats under bark', treatment: 'Trench roots; remove infected trees' },
{ plant: 'Pine', disease: 'Pine Wilt', symptoms: 'Rapid needle browning and tree death; resin exudation', treatment: 'Remove infected trees; control pine sawyer beetle' },
{ plant: 'Elm', disease: 'Dutch Elm Disease', symptoms: 'Wilting leaves; brown streaks in wood', treatment: 'Remove and burn infected trees; control bark beetles' },
{ plant: 'Chestnut', disease: 'Chestnut Blight', symptoms: 'Orange cankers; bark splits; branch dieback', treatment: 'Remove infected tissue; use resistant varieties' },
{ plant: 'Papaya', disease: 'Powdery Mildew', symptoms: 'White powder on leaves', treatment: 'Apply sulfur or fungicides; ensure airflow' },
{ plant: 'Citrus', disease: 'Huanglongbing (HLB)', symptoms: 'Yellow shoots, lopsided fruit, bitter flavour', treatment: 'Remove infected trees; control psyllids' },
{ plant: 'Citrus', disease: 'Phytophthora Brown Rot', symptoms: 'Brown lesions on fruit, branch dieback', treatment: 'Improve drainage; fungicide dips' },
{ plant: 'Mango', disease: 'Powdery Mildew', symptoms: 'White fungal growth on flowers & leaves', treatment: 'Apply sulfur; improve airflow' },
{ plant: 'Cocoa', disease: 'Black Pod Rot', symptoms: 'Black lesions on pods enlarging rapidly', treatment: 'Sanitation; fungicide sprays' },
{ plant: 'Coffee', disease: 'Coffee Wilt Disease', symptoms: 'Wilting; sapwood discolors; tree death', treatment: 'Remove infected trees; use resistant varieties' },
{ plant: 'Rubber', disease: 'South American Leaf Blight', symptoms: 'Brown lesions on leaves; defoliation', treatment: 'No effective control; quarantine measures' },
{ plant: 'Soybean', disease: 'Sudden Death Syndrome', symptoms: 'Yellow blotches between veins; root rot', treatment: 'Use resistant varieties; rotate crops' },
{ plant: 'Tomato', disease: 'Septoria Leaf Spot', symptoms: 'Small round spots with gray centers, yellow halos', treatment: 'Remove infected leaves; apply copper or chlorothalonil' },
{ plant: 'Eggplant', disease: 'Verticillium Wilt', symptoms: 'Yellowing, wilting on one side of plant', treatment: 'Use resistant cultivars; crop rotate' },
{ plant: 'Lettuce', disease: 'Bottom‑Rot (Rhizoctonia)', symptoms: 'Brown decay at plant base', treatment: 'Improve soil drainage; treat seeds' },
{ plant: 'Spinach', disease: 'Downy Mildew', symptoms: 'Yellow patches on leaves with fuzzy underside', treatment: 'Apply fungicides; use resistant varieties' },
{ plant: 'Pea', disease: 'Pea Enation Mosaic Virus', symptoms: 'Leaf enations (outgrowths), stunting', treatment: 'Use virus-free seed; control aphids' },
{ plant: 'Olive', disease: 'Peacock Spot', symptoms: 'Dark circular leaf spots', treatment: 'Apply copper fungicides; prune for airflow' },
{ plant: 'Grapevine', disease: 'Pierce’s Disease', symptoms: 'Leaf scorch, vine decline', treatment: 'Remove infected; control leafhopper vectors' },
{ plant: 'Walnut', disease: 'Walnut Blight', symptoms: 'Black lesions on nuts and shoots', treatment: 'Apply copper sprays during early season' },
{ plant: 'Hops', disease: 'Downy Mildew', symptoms: 'Yellowing leaves; downy growth on underside; stunted cones', treatment: 'Apply fungicides; trellis spacing' },
{ plant: 'Hop', disease: 'Fusarium Wilt', symptoms: 'Wilting; brown internal vascular tissue', treatment: 'Use clean propagation; soil sterilization' },
{ plant: 'Pineapple', disease: 'Phytophthora Fruit Rot', symptoms: 'Water-soaked spots on fruit base', treatment: 'Improve drainage; fungicide dips' },
{ plant: 'Mango', disease: 'Bacterial Canker', symptoms: 'Cankers on stems; gum exudation', treatment: 'Prune infected branches; copper sprays' },
{ plant: 'Grape', disease: 'Eutypa Dieback', symptoms: 'Stunted spur growth with dead tissue', treatment: 'Prune out dead wood; use fungicide wound sealants' },
{ plant: 'Rose', disease: 'Crown Gall', symptoms: 'Tumor-like galls at crown', treatment: 'Remove infected plants; disinfect tools' },
{ plant: 'Pomegranate', disease: 'Alternaria Fruit Rot', symptoms: 'Sunken brown spots on fruit skin', treatment: 'Apply fungicides; harvest promptly' },
{ plant: 'Date Palm', disease: 'Bayoud Disease (Fusarium wilt)', symptoms: 'Yellowing leaves; sudden death', treatment: 'Remove and destroy infected palms; use tolerant varieties' },
]
function searchDiseases() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';
  if (!query) return;
  const results = plantDiseases.filter(item =>
    item.plant.toLowerCase().includes(query) || item.disease.toLowerCase().includes(query)
  );
  if (results.length === 0) {
    resultsContainer.innerHTML = '<li>No results found.</li>';
    return;
  }
  results.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>Plant:</strong> ${item.plant}<br>
      <strong>Disease:</strong> ${item.disease}<br>
      <strong>Symptoms:</strong> ${item.symptoms}<br>
      <strong>Treatment:</strong> ${item.treatment}
    `;
    resultsContainer.appendChild(li);
  });
}
function detectDisease() {
  document.getElementById('resultBox').style.display = "block";
}

// --- Add hundreds of floating leaves using JS ---
function random(min,max) { return Math.random()*(max-min)+min; }
window.onload = function() {
  // Leaves data: use SVGs as strings
  const leafSVGs = [
    '<svg viewBox="0 0 40 80" width="30" height="60"><ellipse cx="20" cy="40" rx="13" ry="37" fill="#6ee7b7"/><path d="M20 11 Q23 51 19 70" stroke="#239d76" stroke-width="2.2" fill="none"/></svg>',
    '<svg viewBox="0 0 36 70" width="26" height="42"><ellipse cx="18" cy="36" rx="13" ry="27" fill="#81c784"/><path d="M18 11 Q15 45 18 62" stroke="#a5d6a7" stroke-width="2.1" fill="none"/></svg>',
    '<svg viewBox="0 0 58 110" width="36" height="68"><ellipse cx="29" cy="55" rx="19" ry="33" fill="#fff59d"/><path d="M29 20 Q25 69 29 100" stroke="#bdb76b" stroke-width="1.6" fill="none"/></svg>',
    '<svg viewBox="0 0 46 80" width="24" height="45"><path d="M23 6C43 21 43 57 23 74 3 57 3 21 23 6Z" fill="#85e489"/><path d="M23 6 Q22 51 23 74" stroke="#338a4a" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 50 100" width="19" height="36"><path d="M25 8C44 22 46 67 25 92 5 67 7 22 25 8Z" fill="#43a047"/><path d="M25 8 Q23 62 25 92" stroke="#236d3f" stroke-width="2" fill="none"/></svg>'
  ];
  // Add 60 leaves to fill the void; increase for denser effect (up to memory limits)
  const nLeaves = 60;
  const leavesBg = document.getElementById('leaves-bg');
  if(leavesBg) {
    for(let i=0;i<nLeaves;i++){
      const d = document.createElement('div');
      d.className='js-leaf';
      // Random SVG leaf
      d.innerHTML = leafSVGs[i % leafSVGs.length];
      // Scale/rotate/opacity
      const size = random(0.65,1.25);
      const rot = random(-48,48);
      d.style.transform = `scale(${size}) rotate(${rot}deg)`;
      
      d.style.opacity = random(0.38,0.93);
      // Initial position (across the top/bottom for Y, anywhere along X)
      const x = random(0, 100);
      const y = random(-12, 115);
      d.style.left = x+"vw";
      d.style.top = y+"vh";
      // Animate falling (with wind curve)
      // Choose a random wind class for each
      const windType = Math.floor(random(1,4));
      d.style.animation = `leafWind${windType} ${random(13,23).toFixed(1)}s ${random(-12,0).toFixed(1)}s linear infinite`;
      leavesBg.appendChild(d);
    }
  }
};
