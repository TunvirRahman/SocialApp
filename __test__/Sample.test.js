
import 'react-native'
import React from 'react';
import app from './../App';
import renderer from 'react-test-renderer';

it('testRender',()=>{
const tree = renderer.create(
<app></app>
).toJSON();
expect(tree).toMatchSnapshot();
})